import fetch from 'node-fetch';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//creating variables for url
var quantity;
var datatype;
var fdata;

//creating server
app.listen(8080,()=>{
    console.log("listening");
});

//sending html file fetch.html and getting values of quantity and datatype
app
.get('/', (req, res)=>{
    res.sendFile('C:/Users/riya5/OneDrive/Documents/internship/hi5/fetch.html');})
.post('/', async (req,res)=>{
  quantity=req.body.quantity;
  datatype=req.body.datatype;
  await fetchdata(datatype, quantity, res);
});

//conneting mongodb
const link='mongodb+srv://admin:QpjMvh0w4wucAcFf@cluster0.vvougkt.mongodb.net/?retryWrites=true&w=majority';//QpjMvh0w4wucAcFf
mongoose.connect(link)
.then(function(db){
    console.log('db conneted');
})
.catch(function(err){
    console.log(err);
});

//creating schema
const allinoneschema=mongoose.Schema({
    id:{
        type:Number,
        required: true
    },
    name:{
        type:String,
        default:''
    }
});

//creating model based on schema
const model=mongoose.model('model', allinoneschema);

//fetching data
async function fetchdata(datatype, quantity, res){
    const url = `https://fakerapi.it/api/v1/${datatype}?_quantity=${quantity}`;
    const response = await fetch(url);
    fdata = await response.json();
    res.send(fdata);
    
    //creating static name for all datatype to store in database 
    const name = (() => {
        switch (datatype) {
          case 'addresses':
            return 'streetname';
          case 'books':
            return 'title';
          case 'companies':
            return 'name';
          case 'person':
            return 'firstname';
          default:
            return '';
        }
      })();
    
    //saving to db
    for (const data of fdata.data) {
      const modelobj = {
          id: data.id,
          name: data[name]
      };
    
      const doc = new model(modelobj);
      await doc.save();
  }
}


