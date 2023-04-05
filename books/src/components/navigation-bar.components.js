import * as Consts from '../consts';
import {Link} from 'react-router-dom';


const NavigationBar = ({title}) => {



    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark theme-primary-color "  >
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li  
                        className="nav-item" >
                            <Link className="nav-link active" aria-current="page" to={"/book/list"}  >
                                <i className="fa-solid fa-book"></i>Books</Link>
                        </li>
                        <li 
                        className="nav-item" >
                            <Link className="nav-link active" to="/book/add">
                                <i className="fa-solid fa-plus"></i>Book</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link active" aria-current="page" to="/author/list">
                                <i className="fa-solid fa-users"></i>Authors</Link>
                        </li>
                        <li className="nav-item " >
                            <Link className="nav-link active" to="/author/add">
                                <i className="fa-solid fa-plus"></i>Author</Link>
                        </li>
                       


                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle active" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Member
                            </Link>
                            <ul className="dropdown-menu ">
                                <li >
                                    <Link className="dropdown-item" to="/user/login"><i className="fa-solid fa-sign-in"></i>Login</Link></li>
                                <li >
                                    <Link className="dropdown-item" to="/user/register"><i className="fa-solid fa-user-plus"></i>Register</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><Link className="dropdown-item disabled" to="#"><i className="fa-solid fa-arrow-right-from-bracket"></i>Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;