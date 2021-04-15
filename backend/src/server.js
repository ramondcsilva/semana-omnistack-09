const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://adm:adm123@clustertest.7vqbg.mongodb.net/DatabaseO9?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);