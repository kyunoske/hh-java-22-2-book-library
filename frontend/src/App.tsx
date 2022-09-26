import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import {addBook, deleteBook, getAllBooks} from "./services/book-library-api-service";
import {Book} from "./models/Book";

function App() {
    const [books, setBooks] = useState([])
    let book!: Book;

    useEffect(() => {
        getAllBooks()
            .then(books => setBooks(books))
            .catch(error => console.error(error))
    }, [])

    const createNewBook = (book: Book) =>
        addBook(book)
            .then(() => getAllBooks())
            .then(books => setBooks(books))
            .catch(error => console.error(error));

    const removeBook = (isbn: string) => {
        deleteBook(isbn)
            .then(() => getAllBooks())
            .then(books => setBooks(books))
            .catch(error => console.error(error))
    }

    return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage
                  books={books}
                  book={book} onAdd={createNewBook}
                  deleteBook={removeBook}
              />} />
          </Routes>
      </Router>

  );
}

export default App;
