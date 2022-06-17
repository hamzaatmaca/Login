
const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({

    email:{
        type:String,
        require:[true, 'Please Enter E-mail'],
        
    },
    password:{
        type:String,
        require:[true]
    }

})



module.exports = mongoose.model('Login',LoginSchema)