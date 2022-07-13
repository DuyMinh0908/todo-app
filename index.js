import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const PORT = 3000;
import express from 'express';
import router from './server/routes/router';
const app = express();
const URLDB = "mongodb://localhost:27017";
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/', router);
mongoose.connect(URLDB,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> {
  console.log('Database connected');
})
.catch((error)=> {
  console.log('Error connecting to database');
});
app.listen(PORT, () => {
  console.log(`Our server is running on port ${PORT}`);
});