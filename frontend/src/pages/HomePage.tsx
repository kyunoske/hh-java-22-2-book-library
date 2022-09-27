import React, {useState} from 'react';
import "./HomePage.css";
import {Book} from "../models/Book";
import BookList from "../components/BookList";
import AddBook from "../components/AddBook";
import {deleteBook} from "../services/book-library-api-service";

type HomePageProps = {
    books: Book[];
    book: Book;
    onAdd: any;
    deleteBook: (isbn: string) => void;
}

function HomePage(props: HomePageProps) {

    return (
        <div>
            <h1 style={{textAlign: "center"}} >Charlie Brown Book List</h1>


            <div className="homepage-container">
                <AddBook
                    book={props.book}
                    onAdd={props.onAdd}
                />
                <BookList
                    books={props.books}
                    deleteBook={deleteBook}
                />
            </div>
        </div>
    );
}

export default HomePage;