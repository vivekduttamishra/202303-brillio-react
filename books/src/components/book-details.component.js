import Tags from "./tags.component";


const BookDetailsComponent=({book})=>{

    if(!book){
        return <p>Please Select a book</p>
    }

    return (
        <div>
            <h2>{book.title}</h2>
            <div className='row'>
                <div className='col col-md-4' book-cover-div>
                    <img className='cover-large' src={book.cover} title={book.title} alt={book.title} />
                </div>
                <div className='col col-md-4 book-info-div'>
                    <ul>
                        <li><strong>Author</strong> {book.author}</li>
                        <li><strong>Price</strong> {book.price}</li>
                        <li><strong>Rating</strong> {book.rating}</li>
                        <li><strong>Tags</strong></li>
                    </ul>
                    <Tags tags={book.tags} />
                </div>
                

                <h3>Details</h3>
                <p>{book.description}</p>
            </div>
        </div>
    );
}

export default BookDetailsComponent;