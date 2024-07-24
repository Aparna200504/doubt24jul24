const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res) => {
	const url = "mongodb+srv://aparnaprasad2004:MaQd6m4FtUwCJeuv@doubt24jul24.wap3uwp.mongodb.net/?retryWrites=true&w=majority&appName=doubt24jul24";
	const client = new MongoClient(url);
	const db = client.db("doubt24jul24");
	const coll = db.collection("person");
	const record = {"name":req.body.name,"phone":req.body.phone,"doubt":req.body.doubt};
	coll.insertOne(record)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});

app.listen(9000, () =>{console.log("ready @ 9000");});