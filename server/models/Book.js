const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({//스키마 정의
    title:{type: String, required: true, trim:true},//책의 제목
    author:{type: String, required: true, trim:true},//책의 저자
    summary:{type: String,  trim:true},//책의 내용 요약
    genre:{type: String,  trim:true},//책의 장르
    release:{type: String, required: true, trim:true},//책의 발매일
    ISBN:{type: Number, required: true, trim:true}//책의 국제표준도서정보
})

const Book = mongoose.model('Book',BookSchema)// 스키마로부터 생성된 모델 객체
module.exports = Book;