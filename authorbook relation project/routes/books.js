const express = require('express');
const router = express.Router();


const Book = require('../models/books');
const Author = require('../models/authors');

router.route('/:authid').get(async(req,res,next)=>{
    const {authid} = req.params;
    const author = await Author.findById(authid).populate('books','name -_id');
    res.json(author);
}).post(async(req,res,next)=>{
    const {authid} = req.params;
    const newBook = new Book(req.body);
    const author = await Author.findById(authid);
    newBook.author = author;

    await newBook.save();

    author.books.push(newBook);
    await author.save();

    res.json(newBook);
});

module.exports = router;