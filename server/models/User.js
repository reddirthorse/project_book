const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({//스키마 정의
    name:{type:String,required:true,trim:true},//사용자 이름
    age:{type:Number,required:true,trim:true},//사용자 나이
    email:{type:String,required:true,trim:true},//사용자 연락처
    books:{type:Array,required:true}//해당 사용자의 도서 구매 목록

})

const  User= mongoose.model('User',UserSchema)// 스키마로부터 생성된 모델 객체
module.exports = User;