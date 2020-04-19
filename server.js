const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');

const items=require('./routes/api/items')
const app=express();
//Bodyparser Middleware
app.use(bodyParser.json());
const db=require('./config/keys').mongoURI;
mongoose
.connect(db)
.then(()=>console.log('Mongo connected'))
.catch(err=>console.log(err));

//use routes
app.use('/api/items',items);
app.get('/print',(req,res)=>{
    res.send('smile');
    });
const port= process.env.PORT || 5000;
app.listen(port,()=>console.log('server started on '+port));