const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    roles:{
        type:[String],
    },
    profileFields:{
        firstName:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },

    },
    login:{
        type:Date
    }
   

})



const User=mongoose.model('User',userSchema);
module.exports=User;
