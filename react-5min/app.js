
var placeholder=document.getElementById("placeholder");

var header=React.createElement("h1",{
    style:{
        color:'blue'
    }
},"React Web");
var body= React.createElement("p",{className:"slogan"},"Welcome to React");


var component=React
                .createElement("div",
                    {className:"header"},
                    header,body);

//placeholder.innerHTML=component;

ReactDOM.render(component,placeholder);

