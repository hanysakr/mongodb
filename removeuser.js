mongo = new Mongo("localhost");
db = mongo.getDB("test");
db.dropUser("testAdmin");
db = mongo.getDB("admin");
cur = db.system.users.find();
printjson(cur.toArray());