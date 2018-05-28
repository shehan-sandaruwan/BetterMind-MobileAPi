const mongoose = require('mongoose');

const emotionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id:{type:String,require:true, ref:'User'},
    sad_val:{type:Number, require:true},
    happy_val:{type:Number, require:true},
    neutral_val:{type:Number,require:true}
});

module.exports = mongoose.model('Emotion',emotionSchema);