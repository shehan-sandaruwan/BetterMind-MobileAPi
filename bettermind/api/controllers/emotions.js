
const Emotion = require('../models/emotiondata.js');

exports.emotions_get_all = (req,res,next)=>{
    Emotion.find()
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

exports.emotion_post = (req,res,next)=>{
    const emotion = new Emotion({
       _id:new mongoose.Types.ObjectId(),
        user_id:req.body.user_id,
        sad_val:req.body.sad_val,
        happy_val:req.body.happy_val,
        neutral_val:req.body.neutral_val

    });

        emotion.save().then(result=>{
            console.log(result);
        })
        .catch(err => console.log(err));
    res.status(201).json({
        message:'handling POST request through /emotion',
        givenEmotions:emotion
    });
}
exports.emotion_get_Id = (req,res,next)=>{
    const id = req.params.user_id;
    Emotion.findById(id)
    .select('sad_val happy_val neutral_val')
    .exec()
    .then(docs =>{
        const response = {
            count: docs.length,
            emotion:docs.map(doc =>{
                return {
                    sad_val:doc.sad_val,
                    happy_val:doc.happy_val,
                    neutral_val:doc.neutral_val
                }
            })

        }
    })
    res.status(200).json({
        message:'handling GET request through /emotion'
    });
}

exports.emotion_delete_Id = (req,res,next)=>{
    const id = req.params._id;
    Emotion.remove({user_id:id})
    .exec()
    .then(result =>{
        res.status(200).json(result);
        message:'successfully deleted'
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}