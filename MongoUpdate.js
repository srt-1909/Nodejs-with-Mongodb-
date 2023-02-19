const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1";
const database = "e-comm";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection("produts");
}

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateMany(
    {
      name: "note 5",
    },

    {
      $set: { name: "note 55" },
    }
  );
  console.warn(result);
};

updateData();
