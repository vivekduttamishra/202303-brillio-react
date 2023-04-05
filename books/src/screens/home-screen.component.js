import { Link } from "react-router-dom";

const HomeScreen=(props)=>{

    return (
        <div>
            <h2>Book's Web Home Page</h2>
            <ul>
                <li><Link to='/book/list'>Books</Link></li>
                <li><Link to='/author/list'>Authors</Link></li>
            </ul>
        </div>
    );
}

export default HomeScreen;