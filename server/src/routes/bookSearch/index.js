const express = require('express')
const BSRouter = express.Router()
const Book = require("../../../models/Book")
const User = require("../../../models/User")

BSRouter.route('/').post((req,res)=>{//생성
    console.log(`title:${req.body.title}`)
    Book.findOne({title:req.body.title},async(err,book)=>{//중복체크
        if(err) throw err;
        if(!book){//중복된 타이틀이 없을 경우
            const newBook = new Book(req.body);
            await newBook.save().then(()=>{
                res.json({status:201, msg:'new book created in db!',newBook})
            })
        }else{//중복된 타이틀이 존재하는 경우
            const msg = 'this book already exists in db'
            console.log(msg)
            res.json({status:204,msg})
        }
    })
})

BSRouter.route('/').get(async(req,res)=>{//전체조회
    const books = await Book.find()
    res.json({status:200,books})
})

 BSRouter.route('/:id').get((req,res)=>{//id로 조회
     Book.findById(req.params.id,(err, book)=>{
         if(err) throw err;
         res.json({status:200,book})
     })
 })

 BSRouter.route('/:id').put((req,res)=>{//id로 조회 후 업데이트
    Book.findByIdAndUpdate(req.params.id,req.body, {new:true}, (err,book)=>{
        if(err) throw err;
        res.json({status: 204, msg:`book${req.params.id} updated in db`,book})
    })
 })

 BSRouter.route('/:id').delete((req,res)=>{//id로 조회 후 삭제
    Book.findByIdAndDelete(req.params.id, (err, book)=>{
        if(err) throw err;
        res.json({status:204, msg:`book ${req.params.id} removed in db!`})
    })
})

module.exports=BSRouter