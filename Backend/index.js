const express = require('express');
const cors = require("cors");
const api = require('./routes/route');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const app = express();
const port = 4000;
const url = "mongodb://localhost:27017/TestNowPort";


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', api);
//mongoose.set('useCreateindex', true);
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, res) => {
    if (err) {
      console.log(`Erro to connect : ${err}`);
    } else {
      console.log(`Conection db established:`);
    }
  }
);

app.listen(port, () => {
  console.log(`Server Listen in port : ${port}`);
});



