export function Book({ bookTitle, bookImg, bookAuthor, displayBookValue, handleGetBook, id, idx, children }) {

    return (
        <article className="book">
            <img
                src={bookImg}
                alt="Don't Believe Everything You Think "
            />
            <span className="number">#{idx + 1}</span>
            <h2 style={{ color: 'blue' }}>{bookAuthor}</h2>
            {children}
            <button onClick={displayBookValue}>Title</button>
            <button onClick={() => handleGetBook(id)}>Get Book</button>
        </article>
    );
}