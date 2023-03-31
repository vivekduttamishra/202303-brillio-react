
const NavigationBar = (props) => {



    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark theme-primary-color "  >
            <div className="container-fluid">
                <a className="navbar-brand" href="/" >{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-users"></i>Authors</a>
                        </li>
                        <li className="nav-item " data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <a className="nav-link active" href="#"><i class="fa-solid fa-plus"></i>Author</a>
                        </li>
                        <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-book"></i>Books</a>
                        </li>
                        <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                            <a className="nav-link active" href="#"><i class="fa-solid fa-plus"></i>Book</a>
                        </li>


                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Member
                            </a>
                            <ul className="dropdown-menu ">
                                <li data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><a className="dropdown-item" href="#"><i class="fa-solid fa-sign-in"></i>Login</a></li>
                                <li data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><a className="dropdown-item" href="#"><i class="fa-solid fa-user-plus"></i>Register</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><a className="dropdown-item disabled" href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;