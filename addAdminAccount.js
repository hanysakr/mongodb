mongo = new Mongo("localhost");
db = mongo.getDB("admin");
db.createUser({
	user: "dbadmin",
	pwd: "test",
	roles: ["readWriteAnyDatabase","dbAdminAnyDatabase","clusterAdmin"]
});

db.createUser({
	user: "useradmin",
	pwd: "test",
	roles: ["userAdminAnyDatabase"]
});