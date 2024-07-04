const  mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    Name: {
        type : String,
    },
    Email: {
        type : String,
        unique: true,
        required : true,
    },
    Password : {
        type: String,
        required : true,
    },
})
module.exports = mongoose.model('user', userSchema)