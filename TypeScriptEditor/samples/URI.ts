
class LinkModifier {
    m_originalLink: string;
	m_baseUrl:string;
	m_vars: string[];
	
	
    constructor(link: string) {
        this.m_originalLink = link;
		this.getUrlVars(this.m_originalLink);
		console.log(this.m_vars);
    }
	
	// Read a page's GET URL variables and return them as an associative array.
	private getUrlVars = (urlHref:string) =>
	{
		var  posParam:number= urlHref.indexOf('?')
			,hash:string[]
			,hashes:string[]
			,i:number
		;
		
		this.m_vars = [];
		posParam = urlHref.indexOf('?');
		this.m_baseUrl = urlHref.substr(0, posParam);
		
		hashes = urlHref.slice(posParam + 1).split('&');
		for (i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			
			this.m_vars.push(hash[0]);
			this.m_vars[hash[0]] = hash[1];
		} // Next i 
		
		return this.m_vars;
	} // End Function getUrlVars
	
	
	public setKey = (key:string, value:string) =>
	{
		if(typeof(this.m_vars[key]) === "undefined")
			this.m_vars.push(key);
		
		this.m_vars[key] = value;
	}
	
	
	public zeroApertureLink = () => 
	{
		this.setKey("dx", "0")
		this.setKey("dy", "0")
		this.setKey("xlr", "0")
		this.setKey("ylr", "0")
		this.setKey("xul", "0")
		this.setKey("yul", "0")
		
		return this;
	}
	
	
	public reassemble = () =>
	{
		var newUrl:string = this.m_baseUrl;
		
		for (var i = 0; i < this.m_vars.length; ++i)
		{
			if (i == 0)
					newUrl += "?" + this.m_vars[i] + "=" + this.m_vars[this.m_vars[i]];
			else
				newUrl += "&" + this.m_vars[i] + "=" + this.m_vars[this.m_vars[i]];
		} // Next i
		
		return newUrl;
	}
	
}


// Begin TESTING
function WriteLine(text:string)
{
	document.body.appendChild(document.createTextNode(text));
	document.body.appendChild(document.createElement("br"));
}

var s:string="http://VMJuliusBaer/ApWebServices/ApDrawingPDFs.aspx?p=JuliusBaer_Portal_DE&d=6612_GB01_OG02_0000&L=RaumNutzung&S=Nutzungsart&SEL=0000000002P2000URG&F=PDF";
s = "http://vmjuliusbaer/ApWebServices/ApDrawingPDFs.aspx?p=JuliusBaer_Portal_DE&d=6612_GB01_OG02_0000&xlr=59.886098762886604&ylr=15.116451999999999&yul=-24.363888&xul=-7.393284762886594&dx=1653&dy=970&L=RaumNutzung&S=Nutzungsart&SEL=0000000002P2000URG&F=PDF";


WriteLine((new LinkModifier(s)).zeroApertureLink().reassemble());

// var x =  (new LinkModifier( (<HTMLLinkElement>document.getElementById('pdffile')).href)).zeroApertureLink().reassemble();



class URI
{
	m_originalLink:string;
	
	// http://tools.ietf.org/html/rfc3986#section-4.1
	// ? should come before the # as noted in RFC 3986:
	// relative-ref = relative-part [ "?" query ] [ "#" fragment ]
	// https://github.com/mono/mono/blob/master/mcs/class/System/System/Uri.cs
	constructor(link: string) 
	{
        this.m_originalLink = link;
    }
	
	public static getQueryString = (url:string) =>
	{
		var pos:number, queryString:string;
		queryString = null;
		pos = url.indexOf("?");
		
		if(pos === -1)
			return queryString;
		
		if(pos + 1 < url.length)
			queryString = url.substr(pos + 1);
		
		if(queryString === null)
			return queryString;
		
		pos = queryString.indexOf("#");
		if(pos !== -1)
			queryString = queryString.substr(0, pos);
		
		return queryString;
	}
	
	
	public static getUrlPath = (url:string) =>
	{
		var pos:number, path:string;
		path = url;
		pos = url.indexOf("?");
		
		if(pos !== -1)
			path = url.substr(0, pos);
			
		pos = path.indexOf("#");
		if(pos !== -1)
			path = path.substr(0, pos);
		
		return path;
	}
	
	public static getFileName = (url:string) =>
	{
		var pos:number, path:string;
		path = url;
		pos = url.indexOf("?");
		
		if(pos !== -1)
			path = url.substr(0, pos);
			
		pos = path.indexOf("#");
		if(pos !== -1)
			path = path.substr(0, pos);
		
		// getUrlPath
		pos = path.lastIndexOf("/");
		if(pos !== -1)
		{
			if(path.length > pos + 1)
				path = path.substr(pos + 1)
			else 
			{
				path = path.substr(0, pos -1)
				return URI.getFileName(path);
			}
		}
		
		return path;
	}

}



// https://stackoverflow.com/questions/403967/how-may-i-reference-the-script-tag-that-loaded-the-currently-executing-script


var url1:string = "http://localhost:60142/scripts/foo.js?v=4";
//url1 = "http://localhost:60142/scripts/?abc=def#ghi";
// url1 = "http://localhost:60142/scripts/foobar.js?abc=def#";
// url1 = "http://localhost:60142/scripts/foobar.js#ghi";
// url1 = "http://localhost:60142/scripts/foobar.js?";	
// alert(URI.getUrlPath(url1));
// alert(URI.getQueryString(url1));
alert(URI.getFileName(url1));
