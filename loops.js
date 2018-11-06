var days=["Monday","Tusesday", "Wednesday", "Thursday", "Firday"];
for (var idx in days){
	print("It's " + days[idx]);
}
print("\n");
for(var i=0;i<days.length;i++){
	print(days[i] + " is day " + parseInt(i+1));
}
print("\n");
var i = 0;
var dayString ="";
while(i < days.length){
	dayString += days[i] + " ";
	i++;
}
print("Days: ");
print(dayString);

