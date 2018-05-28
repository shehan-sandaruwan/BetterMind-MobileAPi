const express = require('express');

const routes = express.Router();

routes.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'handling GET request through /fitbit'
    });
});
routes.post('/',(req,res,next)=>{
    const sleepData  = {
        minutesAsleep: req.body.minutesAsleep,
        startTime: req.body.startTime,
        timeInBed: req.body.timeInBed
    };
    res.status(201).json({
        message:'handling POST request through /fitbit',
        sleepingpattern:emotion
    });
});

module.exports = routes;