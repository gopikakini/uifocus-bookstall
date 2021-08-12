
const db = require('../config/dbconfig');


// Get all books

const getAllBooks = (request,response) => {
    
    db.query(`select * from bookstall.books`, (err,res) => {

        if(err){
            response.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    })

};

// Getting a book details by its id
const getAllBooksById = (request,response) => {

    db.query(`select * from bookstall.books where book_id='0975f743-0b41-4011-8dfe-3a7a38c6229a'`, (err,res) => {

        if(err){
            response.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    })

};

module.exports = {
    getAllBooks,
    getAllBooksById
}

