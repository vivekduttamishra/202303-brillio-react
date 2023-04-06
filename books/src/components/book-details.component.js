import withVisibility from "../hoc/with-visibility";
import Tags from "./tags.component";


const BookDetails=({book,onDelete})=>{

    if(!book){
        return <p>Please Select a book</p>
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <div className='row'>
                <div className='col col-md-4 book-cover-div'>
                    <img className='cover-large' src={book.cover} title={book.title} alt={book.title} />
                </div>
                <div className='col col-md-4 book-info-div'>
                    <ul>
                        <li><strong>Author</strong> {book.author}</li>
                        <li><strong>Price</strong> {book.price}</li>
                        <li><strong>Rating</strong> {book.rating}</li>
                        <li><strong>Tags</strong></li>
                    </ul>
                    {book.tags && <Tags tags={book.tags} />}
                    <button className='btn btn-lg btn-danger margin5'
                            onClick={()=>onDelete(book.id)}
                    >
                        <i className="fa-solid fa-trash"></i> Book
                    </button>
                </div>
                

                <h3>Details</h3>
                <p>{book.description}</p>
            </div>
        </div>
    );
}

export default withVisibility( BookDetails);