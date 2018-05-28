const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();
const Aemotion = require('../models/averageEmotionDb.js');

routes.get('/',(req,res,next)=>{
    Aemotion.find()
    .exec()
    .then(docs=>{
        console.log(docs);
        res.status(200).json(docs)
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
         });
    });
});

routes.post('/',(req,res,next)=>{
    const emotion = new Emotion({
       _id:new mongoose.Types.ObjectId(),
        user_id:req.body.user_id,
        Avdate:req.body.date,
        Avsad_val:req.body.avSad_val,
        Avhappy_val:req.body.avHappy_val,
        Avneutral_val:req.body.avNeutral_val

    });

        emotion.save().then(result=>{
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message:'handling POST request through /averageEmotion',
        givenEmotions:emotion
    });
});



module.exports = routes;