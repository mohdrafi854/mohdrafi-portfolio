import { Link } from "react-scroll";

const Header = () => {
  const navData = [
    {
      navText: "Home",
      className: ["nav-link", "d-md-none"],
      secId:"home"
    },
    {
      navText: "Projects",
      className: ["nav-link", "d-md-none"],
      secId:"project"
    },
    {
      navText: "Technology",
      className: ["nav-link", "d-md-none"],
      secId:"technology"
    },
    {
      navText: "Contact",
      className: ["nav-link", "d-md-none"],
      secId:"contact"
      
    }
  ];
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
              {
                navData.map((item, index) => (
                  <li key={index}>
                    <Link className={item.className.join(" ")} to={item.secId} smooth={true} duration={500}>{item.navText}</Link>
                  </li>
                ))
              }
              <li className="nav-item">
                <Link
                  className="nav-link"
                  target="_blank"
                  to={
                    "https://dev.to/mohd_rafi_854/whats-the-difference-between-sql-vs-nosql-databases-20m9"
                  }
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
