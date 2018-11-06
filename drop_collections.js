mongo = new Mongo("localhost");
newDB = mongo.getDB("newDB");
collections = newDB.getCollectionNames();
printjson(collections);
collection = newDB.getCollection("newCollectionB");
collection.drop();
print("After deleting newCollectionB");
collections = newDB.getCollectionNames();
printjson(collections);