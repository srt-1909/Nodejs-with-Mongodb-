// const dbConnect = require("./mongodb2")

const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1";
const database = "e-comm";
const client = new MongoClient(url);

// async function getData() {
//   let result = await client.connect();
//   let db = result.db(database);
//   let collection = db.collection("produts");
//   // let response = await collection.find({}).toArray();   for all key value pair in collection
//   let response = await collection.find({name:"m 40"}).toArray(); // for individual result finding
//   console.log(response);
// }

// getData(); 

async function dbConnect() {
  let result = await client.connect();
  db = result.db(database);
  return db.collection("produts");
}

// dbConnect().then((resp) => {
//   resp
//     .find({})
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });

//   // console.warn(resp.find(),toArray());
// });

// console.warn(dbConnect);

const main = async () => {
  // console.log("main function called");
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};

main();

