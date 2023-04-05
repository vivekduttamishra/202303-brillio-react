
const Tags=({tags})=>{

        var tagStyle={
        marginRight:"5px",
        marginLeft:"5px",
        background:'lightgray',
        padding:'4px',
        borderRadius:'10%',
        boxShadow:'-2px -2px 2px black',
    }

    var margin={
        marginLeft:'4px',
        marginRight:'4px'
    }

    return (
        <div >
            {tags.map((tag,index)=>(
            <span style={margin} key={index}
            className='badge rounded-pill text-bg-secondary' >
                {tag}
            </span>
            ))}
        </div>
    );
}

export default Tags;