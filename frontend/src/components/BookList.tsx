import React, {useState} from 'react';
import "./BookList.css";
import {Book} from "../models/Book";
import BookCard from "./BookCard";

type BookListProps = {
    books: Book[];
    deleteBook: (isbn: string) => void;
}

function BookList(props: BookListProps) {
    console.log(props.books);
    const [data, setData] = useState("");
    const filteredCharacters = props.books.filter((book) => book.title.toLowerCase().includes(data));

    return (
        <div>
        <div className="input-container">
            <div className="input-group input-group-sm mb-3">
                <input style={{width: "80%", borderColor: "#000000", borderTopColor: "#ffffff",
                    borderRightColor: "#ffffff", borderLeftColor: "#ffffff"}} type="text" className="form-control" placeholder="let's find a book..."
                       onChange={(event ) => setData(event.target.value)} />
            </div>
        </div>

        <div className="book-list-container">
            {filteredCharacters.map((book, index) =>
                <BookCard
                    book={book}
                    key={index}
                    deleteBook={props.deleteBook}
                />
            )}
        </div>
        </div>
    );
}

export default BookList;