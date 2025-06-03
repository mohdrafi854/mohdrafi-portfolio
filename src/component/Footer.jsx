const Footer = () => {
  return (
    <>
      <hr />
      <footer className="text-center py-5">
        <p className="mb-3">
          &copy; {new Date().getFullYear()} Mohd Rafi. All rights reserved
        </p>
        <p class="mb-3">
          Built with <i class="bi bi-heart-fill text-danger"></i> using
          Bootstrap and React.js
        </p>
        <p class="mb-0">
          Learning full stack development at{" "}
          <a href="#" class="text-success text-decoration-none">
            neog.camp
          </a>
        </p>
      </footer>
      <div class="position-fixed bottom-0 end-0 p-3">
        <a
          href="#hero"
          class="btn btn-success rounded-circle p-3"
          style={{width:"50px",height:"50px",display:"flex","align-items":"center","justify-content":"center","backgroundColor":"#182634","borderColor":"#182634"}}
        >
          <i class="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
};
export default Footer;
