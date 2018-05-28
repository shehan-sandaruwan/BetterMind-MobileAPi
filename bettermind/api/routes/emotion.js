const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();
const Emotion = require('../models/emotiondata.js');
const emotionController = require('../controllers/emotions.js');

routes.post('/',emotionController.emotion_post);

routes.get('/:user_id',emotionController.emotion_get_Id);

routes.get('/',emotionController.emotions_get_all);

routes.delete('/:_id',emotionController.emotion_delete_Id);


module.exports = routes;