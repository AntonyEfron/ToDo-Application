const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const TodoData = new Shema({
    DetailTask : {
        type : String,
        requird  : true
    },
    Date : {
        type : String,
        requird  : true
    },
},{timestamps: true});

module.exports = mongoose.model('TaskData',TodoData);