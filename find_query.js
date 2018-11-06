function displayWords(msg, cursor, pretty){
	print("\n" + msg);
	words = cursor.map(function(word){
		return word.word;
	});
	
	wordStr = JSON.stringify(words);
	if(wordStr.length > 65){
		wordStr = wordStr.slice(0,50) + "...";	
	}
	print(wordStr);
}

mongo = new Mongo("localhost");
wordsDB = mongo.getDB("words");
wordsColl = wordsDB.getCollection("word_stats");
cursor = wordsColl.find({
	first: {$in: ['a','b','c']}
});
displayWords("words starting with A, B, C " ,cursor);

cursor = wordsColl.find({
	size: {$gt: 12}
});
displayWords("words longer than 12 characters " ,cursor);

cursor = wordsColl.find({
	$and:[{first:{$in:['a','e','i','o']}},{last:{$in:['a','e','i','o']}}]
});
displayWords("words that start and end with a vowel: ", cursor);

cursor = wordsColl.find({
	otherChars: {$exists:true}
});
displayWords("Words with no alphabet characters:", cursor);

curosr = wordsColl.find({
	charsets:{$elemMatch:{$and:[{type: 'other'},{chars:{$size: 1}}]}}
});
displayWords("Words with 1 non alphabet characters:", cursor);