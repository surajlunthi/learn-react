import React from "react";
import ReactDOM from "react-dom/client"

import './index.css'
import { books } from "./books"
import { Book } from "./Book"



function BookList() {

    const someValue = 'shakeAndBake'
    const displayValue = () => {
        console.log(someValue)
    }
    const handleGetBook = (id) => {
        console.log(books.find(el => el.id === id))
    }

    return <>
        <h1>Best Selling Books</h1>
        <section className="bookList">
            <EventExamples />
            {books.map((el, idx) => <Book
                key={el.id}
                id={el.id}
                idx={idx}
                bookTitle={el.title}
                bookImg={el.img}
                bookAuthor={el.author}
                displayBookValue={displayValue}
                handleGetBook={handleGetBook}
            >
            </Book>)}
        </section >
    </>
}


const EventExamples = () => {
    const handleInput = (e) => {
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
        console.log('handle from input')
    }
    const handleButtonClick = (e) => {
        console.log('handle button')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit')
    }

    return <section>
        <form onSubmit={handleSubmit}>
            <h2>Form</h2>
            <input type="text" name='example'
                onChange={handleInput}
                style={{ margin: '1rem 0' }} />
        </form>
        <button type="submit" onClick={handleSubmit}>Submit!!!</button>
        <button onClick={handleButtonClick} type="button">Click me !!!</button>
    </section>
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)