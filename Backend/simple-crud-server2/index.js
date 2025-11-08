const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

// simpleDBUser

// kWjblvKyL1mNSH4v
const uri = "mongodb+srv://simpleDBUser:kWjblvKyL1mNSH4v@cluster0.jmiu3wp.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World from my second server!')
})

async function run() {
  try {
    await client.connect();
    const userDB = client.db('usersDB');
    const usersCollection = userDB.collection('users');

    // add database related all api's here


    app.post('/users',async (req, res) => {
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    })

    app.get('/users', async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.delete('/users/:id', async (req,res) => {
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    })


    app.get('/users/:id', async (req, res) =>{
      const id = req.params.id;
      const query = {_id : new ObjectId(id)};
      const result = await usersCollection.findOne(query);
      res.send(result);
    })

    app.patch('/users/:id', async (req, res) =>{
      const id = req.params.id;
      const updatedUser = req.body;
      const query = {_id: new ObjectId(id)};

      const update = {
        $set: {
          name: updatedUser.name,
          email: updatedUser.email
        }
      }
      const options = {};
      const result = await usersCollection.updateOne(query, update, options);
      res.send(result);
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server2 is running on http://localhost:${port}`)
})