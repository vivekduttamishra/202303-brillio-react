import bookManager from '../services/simple-book-manager';
import BookDetails from '../components/book-details.component';
import withVisibility from '../hoc/with-visibility';


const BookDetailsScreen=()=>{

    var book= bookManager.getBookById('the-accursed-god');


    return (
        <BookDetails book={book}/>
    );
}

export default withVisibility( BookDetailsScreen);