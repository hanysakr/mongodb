mongo = new Mongo("localhost");
db = mongo.getDB("test2");
db.createUser( { user: "testAdmin",
	     pwd: "test",
	     roles:["dbAdmin"]} );
db.createUser( { user: "testWriter",
	     pwd: "test",
	     roles:["readWrite"]} );
db.createUser( {
	user: "testReader",
	pwd: "test",
	roles: ["read"]
});