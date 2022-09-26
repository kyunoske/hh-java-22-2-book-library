import React, {useState} from 'react';
import "./AddBook.css";
import {Book} from "../models/Book";

type AddBookProps = {
    book: {
        title: string,
        image: string,
        author: string,
    };
    onAdd: any;
}

function AddBook(props: AddBookProps) {

    // main array of objects state
    const [book, setBook] = useState([])

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setIsbn] = useState("")


    // @ts-ignore
    const handleSubmit = (event) => {
        event.preventDefault();

        let book: Book = {
            title,
            author,
            image,
            isbn
        }
        // @ts-ignore
        setBook(book);
        if (title) {
            props.onAdd(book).then(() => setTitle(""))
        }


    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form-group">
                <div className="label-group">
                    <label>Title:</label>
                        <input type="text" className="form-control"
                           onChange={(event) => setTitle(event.target.value)}
                        />

                </div>
                <div className="label-group">
                    <label>Image:</label>
                        <input type="text" className="form-control"
                           onChange={(event) => setImage(event.target.value)}
                        />

                </div>
                <div className="label-group">
                    <label>Author:</label>
                        <input type="text" className="form-control"
                           onChange={(event) => setAuthor(event.target.value)}
                        />

                </div>
                <div className="label-group">
                    <label>ISBN#:</label>
                    <input type="text" className="form-control"
                       onChange={(event) => setIsbn(event.target.value)}
                    />
                </div>

            <div className="button-container">
                <button type="submit" className="btn btn-success btn-md">Add Book</button>
            </div>
            </form>

        </div>
    );
}

export default AddBook;