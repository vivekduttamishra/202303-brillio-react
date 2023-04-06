import { Link } from "react-router-dom";

const BookItem = ({ book,currency="₹" }) => {

    var width='200px';

    var cardStyle={
        width,
        margin:'5px'
    }

    var imageStyle={
        width
    }

    var priceStyle={
        color:'gray',
        align:'left'
    }

    var ratingStyle={
        color:'gray',
        align:'right'
    }

    var description= book.description?.length>50?`${book.description.substring(0,50)}...`:book.description;

    return (
        <Link to={`/book/details/${book.id}`} class='book-item' >
        <div className="card" style={cardStyle}>
            <img src={book.cover} 
                className="card-img-top" 
                style={imageStyle} 
                alt={book.title}
            />
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <div className='row'>
                        <div className='col' style={priceStyle} >
                            {book.price}
                        </div>
                        <div className='col' style={ratingStyle}>
                            {book.rating} / 5
                        </div>
                    </div>
                   
                    <p className="card-text">{description}</p>
                    
                </div>
        </div>
        </Link>
    );
}

export default BookItem;