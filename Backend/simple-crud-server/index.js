const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = 3000
const uri = "mongodb+srv://simpleDBUser:wXykez2tFds9dolh@alamgir.ilrz28i.mongodb.net/?appName=alamgir";

// simpleDBUser
// wXykez2tFds9dolh

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

async function run() {
  try {
    await client.connect();


    // all api's
    app.post('/users', (req,res) => {
        console.log('Hitting on users.......');
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);


app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})