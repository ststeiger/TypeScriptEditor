

function WriteLine(text)
{
    document.body.appendChild(document.createTextNode(text));
    document.body.appendChild(document.createElement("br"));
}



function getLastScript()
{
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts.length > 0 ? scripts[scripts.length - 1] : null;

    var scriptName = lastScript.src;
    alert("loading: " + scriptName);
}



var getScriptURLWhenSynchronousLoadingWithoutFramesOrIframes = (function ()
{
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    return function () { return myScript.src; };
})();





var scriptUrl = (function ()
{
    var myScript = document.getElementById('scrpPos');
    return myScript.src;
})();



// http://localhost:60142/scripts/foo.js?v=4
// WriteLine(scriptUrl);


function getUrlPath(url)
{
    var pos, path;
    path = url;
    pos = url.indexOf("?");
    if (pos !== -1)
        path = url.substr(0, pos);
    pos = path.indexOf("#");
    if (pos !== -1)
        path = path.substr(0, pos);
    return path;
}

function getFileName(url)
{
    var pos, path;
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
            return getFileName(path);
        }
    }
		
    return path;
}


function getQueryString(url)
{
    var pos, queryString;
    queryString = null;
    pos = url.indexOf("?");
    if (pos === -1)
        return queryString;
    if (pos + 1 < url.length)
        queryString = url.substr(pos + 1);
    if (queryString === null)
        return queryString;
    pos = queryString.indexOf("#");
    if (pos !== -1)
        queryString = queryString.substr(0, pos);
    return queryString;
};


function getScriptQueryString()
{
    var i, scripts = document.getElementsByTagName('script');

    for (i = 0; i < scripts.length; ++i)
    {
        var url = scripts[i].src;
        if (getFileName(url).toLowerCase() == "foo.js")
        {
            var qs = getQueryString(url);
            return qs;
        }
        
    }

    return null;
}

// alert(getScriptQueryString()); 
