const mongoose = require('mongoose')

const petSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true,'Pet Name is required!'],
        minLength:[3,'Pet Name must be 3 or more characters.']
    },
    type: {
        type:String,
        required:[true,'Last Name is required!'],
        minLength:[3,'Pet Type must be 3 or more characters.']
    },
    description: {
        type:String,
        required:[true,'Age is required!'],
        minLength:[3,'Description must be 3 or more characters.']
    },
    skill1: {
        type:String,
    },
    skill2: {
        type:String,
    },
    skill3: {
        type:String,
    }
},{timestamps: true})
module.exports = mongoose.model('Pet', petSchema)