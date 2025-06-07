import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg sticky-lg-top border-bottom border-dark-subtle">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to={"/"}>
            <span className="me-2 text-success">&lt;&gt;</span>
            <span className="fw-bold">Mohd Rafi</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" target="_blank" to={"https://dev.to/mohd_rafi_854/whats-the-difference-between-sql-vs-nosql-databases-20m9"}>
                  Blog
                </Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" href="/">
                  Disabled
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
