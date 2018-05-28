const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const userLoginController = require('../controllers/users.js');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/')

    },
    filename:function(req,file,cb){
        cb(null, file.originalname + new Date().toISOString());
    }
});
const upload = multer({storage:storage});
const User = require('../models/user.js');


routes.post('/',upload.single('userImage'),userLoginController.userLogin_Det);


routes.get('/:user_id',userLoginController.getUserBy_Id);


routes.get('/',userLoginController.getUser_all);


routes.delete('/:user_id',userLoginController.deleteUserBy_Id);


routes.patch('/:user_id',userLoginController.updateUserBy_Id);

module.exports = routes;