import BookDetailsComponent from '../components/book-details.component';
import BookListComponent from '../components/book-list.component';
import bookManager from '../services/simple-book-manager';


const BookManageScreen=(props)=>{

    var books= bookManager.getAllBooks();

    return (
        <div>
            <h2>Recommended Books</h2>
            <p>Here is a list of {books.length}  of our favourite books</p>
            <div className='row'>
                <div className='col'>
                    <BookListComponent books={books} />
                </div>    
                <div className='col'>
                    <BookDetailsComponent/>
                </div>    
            </div>
        </div>
    );
}

export default BookManageScreen;