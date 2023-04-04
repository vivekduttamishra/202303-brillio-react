

const withBorder = (OriginalComponent) =>{

    var style={
        border:'2px solid black',
        padding:"15px"
    };

    return (props)=>{

        return (
            <div className='broder-div' style={style}>
                <OriginalComponent {...props} />
            </div>
        );

    }

}

export default withBorder;