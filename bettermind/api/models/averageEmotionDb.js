const mongoose = require('mongoose');

const emotionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id:{type:String, ref:'User'},
    Avdate :{type:Date, require:true},
    Avsad_val:{type:Number, require:true},
    Avhappy_val:{type:Number, require:true},
    Avneutral_val:{type:Number, require:true}
});

module.exports = mongoose.model('Aemotion',emotionSchema);