import React from "react"
import ReactDOM from 'react-dom/client'

const Greeting = () => {
    return <div className="someValue">
        <h2>Hello <Person></Person></h2>
        <ul>
            <li>
                <a href='#'>Hello link <Message></Message></a>
            </li>
        </ul>
    </div>
}
const Person = () => <h2>Suraj lunthi</h2>
const Message = () => <p>This is Message</p>

const root = ReactDOM.createRoot(document
    .getElementById('root'))

root.render(<Greeting></Greeting>)
