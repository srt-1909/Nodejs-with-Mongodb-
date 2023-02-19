// const dbConnect = require("./mongodb2");

const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1";
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection("produts");
}

const insert = async () => {
  const db = await dbConnect();
  const result = db.insertMany([
    {
      name: "note 5",
      brand: "vivo",
      category: "mobile",
      price: 5000, // make array for multiple entries. as simply as ####
    },

    {
      name: "note 3",
      brand: "micromax",
      category: "mobile",
      price: 7000,
    },

    {
      name: "note 6",
      brand: "oppo",
      category: "mobile",
      price: 3000,
    },
  ]);

  if (result.acknowledge) {
    console.log(result);
  }
};

insert();
