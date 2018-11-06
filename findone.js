mongo = new Mongo("localhost");
wordsdb = mongo.getDB("words");
coll = wordsdb.getCollection("word_stats");
word = coll.findOne();
print("Single document");
printjson(word);