
const User = require('../models/user');

exports.userLogin_Det = (req,res,next)=>{
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        user_name:req.body.user_name,
        password:req.body.password
    });

        user.save().then(result=>{
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message:'handling POST request through /userlogin',
        userLogin:user
    });
}

exports.getUser_all = (req,res,next)=>{
    User.find()
    .exec()
    .then(docs =>{
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}

exports.getUserBy_Id = (req,res,next)=>{
    const id = req.params.user_id;
    User.findById(id)
    .exec()
    .then(doc =>{
        console.log("from the database"+doc);
        if(doc){
            res.status(200).json({doc});
        }
        else{
            res.status(404).json({message:"no valid entry found for provided user_id"});
        }
    })
    .catch(err => console.log(err));
}
exports.updateUserBy_Id = (req,res,next)=>{
    const id = req.params.user_id;
    const updateUser = {};
    for(const ops of req.body){// using loop you can access the all values as array elements, you can update all the elements of array or just few item at a time
        updateUser[ops.userOpName] = ops.value;
    }
    User.update({_id:id},{$set:updateUser})
    //User.update({_id:id},{$set:{user_name: req.body.userName, password:req.body.userpassword})
    .exec()
    .then(result =>{
     console.log(result);
     res.status(200).json(result);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
}

exports.deleteUserBy_Id = (req,res,next)=>{
    const id = req.params.user_id;
    User.remove({_id:id})
    .exec()
    .then(result =>{
        res.status(200).json(result);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}