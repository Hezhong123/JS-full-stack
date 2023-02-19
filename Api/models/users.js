// 用户信息模块
const mongoose = require('mongoose')
const schema = mongoose.Schema;

const newSchema = new schema({
    id:{type:Number},
    tel:{type:Number,required: true},
    name:{type:String}
}, {timestamps: true})

const User = mongoose.model("User", newSchema, "user")

module.exports = User
