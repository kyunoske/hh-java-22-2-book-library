import React from 'react';
import "./BookList.css";
import {Book} from "../models/Book";
import BookCard from "./BookCard";

type BookListProps = {
    books: Book[];
    deleteBook: (isbn: string) => void;
}

function BookList(props: BookListProps) {
    console.log(props.books);
    return (
        <div className="book-list-container">
            {props.books.map((book, index) =>
                <BookCard
                    book={book}
                    key={index}
                    deleteBook={props.deleteBook}
                />
            )}
        </div>
    );
}

export default BookList;