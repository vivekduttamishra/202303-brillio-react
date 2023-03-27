

var AppHeader = function (info) {

    console.log('info',info);
    
    return <div>
        <h1>{info.title}</h1>
        <p>{info.slogan??"Just another website"}</p>
        <hr />
    </div>;
};

export default AppHeader;