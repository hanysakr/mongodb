var myStr = "I think therfore I am.";
print("\nOriginal string: ");
print(myStr);
print("\nFinding the sucsting think: ");
if( myStr.indexOf("think") != -1){
	print(myStr + "conatins think");
}
print("\nReplacing the substing think with feel: ");
var newStr = myStr.replace("think","feel");
print(newStr);
print("\nConverting the phrase into an array ");
var myArr = myStr.split(" ");
printjson(myArr);