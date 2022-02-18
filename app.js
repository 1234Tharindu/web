const express =require ('express');


const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Dehipitiya:Dehipitiya@cluster0.ytdx4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


const app = express();
const port = 3000;
const name = 'Express API';
app.use(express.json());
app.get('/', (req, res) => res.send(`${name} working`));
app.get('/greeting', (req, res) => res.send('Hello World!'));
app.post('/greeting', (req, res) => res
.send(`Hello ${req.body?.name || 'user'}!`)
);
app.listen(port, () =>
console.log(`${name} listening at http://localhost:${port}`)
);