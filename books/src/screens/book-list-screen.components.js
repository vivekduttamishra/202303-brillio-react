
import bookManager from '../services/simple-book-manager';

const BookListScreen=(props)=>{

    var books= bookManager.getAllBooks();

    return (
        <div>
            <h2>Recommended Books</h2>
            <p>Here is a list of {books.length}  of our favourite books</p>

            <ul>
                {books.map(book=>(
                    <li key={book.id}
                        onClick={()=>console.log(`${book.title} clicked`)}>
                        {book.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookListScreen;