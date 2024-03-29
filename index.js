import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import 'path';
// const path = require('path');


import dcrRoutes from './routes/dcr.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json({limmit: '5mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(cors());

app.use('/dcr', dcrRoutes);
app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb+srv://ivan_kozachuk:ivan_kozachuk123@dcr.hwnfk.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Serve static assets if in prod
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
