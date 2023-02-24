const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Model =  require('./data_model/TaskData')
const app = express();

const dbURI = 'mongodb+srv://efron:8138834116@todocluster.2fwmhwl.mongodb.net/todo-app?retryWrites=true&w=majority';
mongoose.set('strictQuery', true);
mongoose.connect(dbURI,{useNewUrlParser : true,useUnifiedTopology : true})
    .then((result) =>  app.listen(5000,()=> {
        console.log("Connected and Listening to port 5000");
    }))
    .catch((err)=>console.log(err))
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))


app.get('/getdata',(req,res)=>{
    try {
        Model.find().sort({createdAt: -1})
          .then(result => {
            console.log(result)
            res.json(result)
          })
    } catch (error) {
        console.log(error)
    }
})

app.post('/addpost',(req,res)=>{ 
    try {
       const newTask = new Model({
        DetailTask:req.body.task,
        Date:req.body.date
    })
        newTask.save()
        .then(res.json({successUrl:'/'}))
        .then(res.status(200).json(newTask));
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    } 
})




