import React from 'react';
import ReactDOM from 'react-dom/client';


//part #1  Create the React Components
var AppHeader = function () {

    return <div>
        <h1>Book's Web</h1>
        <hr />
    </div>;
}

class AppBody extends React.Component {

    render() {
        return <div>
            <h2>Our Recommended Books</h2>
            <p>Here you will get recommendations for
                our most loved books</p>
        </div>;
    }
}

var App =()=> <div>
    <AppHeader />
    <AppBody />
</div>;





//Part #2 Render the Components on the Page
var root = document.getElementById('root');
var reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App/>);
