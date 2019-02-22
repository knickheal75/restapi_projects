const express = require('express');
const router = express.Router();

const Author = require('../models/authors');

router.route('/').get(async (req,res,next) => {

    const author = await Author.find({});
    res.json(author);
}).post(async(req,res,next) => {
    const newAuthor = new Author(req.body);
    await newAuthor.save();
    res.json(newAuthor);
});

module.exports = router;