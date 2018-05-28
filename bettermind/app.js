// use for handling request with node express library

const express = require('express');
const app = express();// now we can access all methody by app;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const emotionRoutes = require('./api/routes/emotion');
const userLoginRoutes = require('./api/routes/userlogin');
const averageEmotionRoutes = require('./api/routes/averageEmotion');
mongoose.connect('mongodb://shean-dinuka:shehan-19930518@cluster0-shard-00-00-ktl5q.mongodb.net:27017,cluster0-shard-00-01-ktl5q.mongodb.net:27017,cluster0-shard-00-02-ktl5q.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 
app.use('/emotion', emotionRoutes);
app.use('/userlogin',userLoginRoutes);
app.use('/averageEmotion',averageEmotionRoutes);
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;