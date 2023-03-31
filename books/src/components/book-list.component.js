
const BookListComponent=(props)=>{

    return (
        <div>
           
             <ul className='list-group book-title-list'>
                {props.books.map(book=>(
                    <li key={book.id} className='list-group-item' 
                        onClick={()=>console.log(`${book.title} clicked`)}>
                        {book.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookListComponent;