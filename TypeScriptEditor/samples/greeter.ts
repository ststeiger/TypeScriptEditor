class Greeter { 
	greeting: string;
	constructor (message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}

var greeter = new Greeter("world");

var button = document.createElement('button')
button.innerText = "Say Hello"
button.onclick = function() {
	alert(greeter.greet())
}

document.body.appendChild(button)

document.body.appendChild(button)
document.body.appendChild(document.createElement("BR"));


function WriteLine(out)
{
    document.body.appendChild(document.createTextNode(out));
    document.body.appendChild(document.createElement("BR"));
}

WriteLine("hello");
WriteLine( JSON.stringify(greeter) );
