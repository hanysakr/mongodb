function formatGreeting(name, city){
	var retStr = "";
	retStr += "Hello " + name + "\n";
	retStr += "Welcome to " + city + "!";
	return retStr;
}

var greeting = formatGreeting("Hany", "Dubai");
print(greeting);
greeting = formatGreeting("Alaa", "Cairo");
print(greeting);