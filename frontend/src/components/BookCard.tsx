import React from 'react';
import "./BookCard.css";
import {Book} from "../models/Book";


type BookCardProps = {
    book: Book;
    deleteBook: (isbn: string) => void;
}

function BookCard(props: BookCardProps) {
    return (
        <div className="book-container">
            <p><strong>{props.book.title}</strong></p>
            <img src={props.book.image} />
            <p>By: <strong>{props.book.author}</strong></p>
            <div className="button-container">
            <button className="btn btn-warning btn-md" onClick={() => props.deleteBook(props.book.isbn)}>delete book</button>
            </div>
        </div>
    );
}

export default BookCard;