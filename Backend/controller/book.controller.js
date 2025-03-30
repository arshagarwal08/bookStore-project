import Book from '../model/book.model.js'
import mongoose from 'mongoose';

export const getBook = async (req,res) => {
    try {
        let filter = {};
        if (req.query.category) {
            const categories = req.query.category.split(",");
            filter.category = { $in: categories };
        }
        const book = await Book.find(filter)

        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getSingleBook = async (req,res) => {
    try {
        const {id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid book ID format" });
        }

        const book = await Book.findOne({ _id: new mongoose.Types.ObjectId(id) });

        if(!book){
            return res.status(404).json({message:"Book not found"})
        }
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json(error)
    }
}