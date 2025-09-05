import { Element } from "react-scroll";

const Footer = () => {
  return (
    <>
    <Element name="footer">
      <hr />
      <footer className="text-center py-5">
        <p className="mb-3">
          &copy; {new Date().getFullYear()} Mohd Rafi. All rights reserved
        </p>
        <p className="mb-3">
          Built with <i className="bi bi-heart-fill text-danger"></i> using
          Bootstrap and React.js
        </p>
        <p className="mb-0">
          Learning full stack development at{" "}
          <a href="/" className="text-success text-decoration-none">
            neog.camp
          </a>
        </p>
      </footer>
      <div className="position-fixed bottom-0 end-0 p-3">
        <a
          href="#hero"
          className="btn btn-success rounded-circle p-3"
          style={{width:"50px",height:"50px",display:"flex","alignItems":"center","justifyContent":"center","backgroundColor":"#182634","borderColor":"#182634"}}
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </Element>
    </>
  );
};
export default Footer;
