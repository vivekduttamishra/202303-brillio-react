
import withVisibility from "../hoc/with-visibility";
import BookItem from "./book-item.component";
const BookGrid=({books})=>{

    return (
        <div className='row'>
            {books.map(book=>(
                <div className='col col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2' key={book.id}>
                    <BookItem book={book}  />
                </div>
            ))}
        </div>
    );
}

export default withVisibility( BookGrid);