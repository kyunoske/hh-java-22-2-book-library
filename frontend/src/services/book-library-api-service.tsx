import axios from "axios";
import {Book} from "../models/Book";

export const getAllBooks = () =>
    axios.get('api/book').then(response => response.data);

export const getBookByIsbn = (isbn: string) =>
    axios.get(`/api/book/${isbn}`).then(response => response.data)

export const addBook = (book: Book) =>
    axios.post('api/book', book);

// export const putTodo = (book: Book) => axios.put(`/api/book/${book.isbn}`, book)

export const deleteBook = (isbn: string) => axios.delete(`/api/book/${isbn}`)