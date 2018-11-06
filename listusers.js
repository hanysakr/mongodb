mongo = new Mongo("localhost");
db = mongo.getDB("admin");
cur = db.system.users.find();
printjson(cur.toArray());