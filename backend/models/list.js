const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
   
    Activity: String,
    Status: String,
    TimeTaken: String,
    Action:String

   
    
});

const listModel = mongoose.model('list', listSchema);

module.exports = listModel;