import React from "react";
import ReactDOM from "react-dom/client"

import './index.css'

const firstBook = {
    id: 1,
    title: "Don't Believe Everything You Think ",
    author: "Joseph Nguyen ",
    img: "https://images-eu.ssl-images-amazon.com/images/I/715qi-cIbML._AC_UL600_SR600,400_.jpg"
}

const secondBook = {
    id: 2,
    title: "Atomic Habits ",
    author: "James Clear",
    img: "https://images-eu.ssl-images-amazon.com/images/I/81Ls+SBCLiL._AC_UL600_SR600,400_.jpg"
}

const books = [firstBook, secondBook]


function BookList() {
    const someValue = 'shakeAndBake'
    const displayValue = () => {
        console.log(someValue)
    }
    const handleGetBook = (id) => {
        console.log(books.find(el => el.id === id))
    }

    return <section className="bookList">
        <EventExamples />
        {books.map(el => <Book
            key={el.id}
            id={el.id}
            bookTitle={el.title}
            bookImg={el.img}
            bookAuthor={el.author}
            displayBookValue={displayValue}
            handleGetBook={handleGetBook}
        >
        </Book>)}
    </section >
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



function Book({ bookTitle, bookImg, bookAuthor, displayBookValue, handleGetBook, children, id }) {

    return (
        <article className="book">
            <img
                src={bookImg}
                alt="Don't Believe Everything You Think "
            />
            <h1>{bookTitle}</h1>
            <h2 style={{ color: 'blue' }}>{bookAuthor}</h2>
            {children}
            <button onClick={displayBookValue}>Title</button>
            <button onClick={() => handleGetBook(id)}>Get Book</button>
        </article>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList></BookList>)