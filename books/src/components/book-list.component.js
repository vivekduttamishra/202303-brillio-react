
const BookListComponent=({books, onSelect})=>{

    return (
        <div>
           
             <ul className='list-group book-title-list'>
                {books.map(book=>(
                    <li key={book.id} className='list-group-item' 
                        onClick={()=>onSelect(book)}>
                        {book.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookListComponent;