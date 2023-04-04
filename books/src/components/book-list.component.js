
const BookList=({books,selectedBook, onSelect})=>{

    var getItemStyle=(book)=>{

        var itemStyle="list-group-item";
        
        
        if(selectedBook && book.id===selectedBook.id)
            itemStyle+=" active";
        return itemStyle;
    }

    return (
        <div>
           
             <ul className='list-group book-title-list'>
                {books.map(book=>(
                    <li key={book.id} className={getItemStyle(book)} 
                        onClick={()=>onSelect(book)}>
                        {book.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;