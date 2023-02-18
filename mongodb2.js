const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1";
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection("produts");
}

module.exports = dbConnect;
