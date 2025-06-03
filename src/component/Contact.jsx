const Contact = () => {
  return (
    <section className="sec-04 py-5" id="connect">
      <div className="container">
        <h2 className="mb-2 display-4 fw-bold">Get in Touch</h2>
        <h5 className="mb-5">Open to exciting collaborations—let's connect</h5>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm card-custom">
              <div className="card-body">
                <div className="d-flex align-items-center">
                <i className="bi bi-envelope fs-1 mb-3 me-3"></i>
                <h5 className="card-title">Email</h5>
                </div>
                <p className="conatct-text">
                  <a href="mailto:mohd.rafi854@gmail.com" rel="noreferrer">mohd.rafi854@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm card-custom">
              <div className="card-body">
                <div className="d-flex align-items-center">
                <i className="bi bi-github fs-1 mb-3 me-3"></i>
                <h5 className="card-title">GitHub</h5>
                </div>
                <p className="conatct-text">
                  <a href="https://github.com/mohdrafi854" target="_blank" rel="noreferrer">Follow on GitHub</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm card-custom">
              <div className="card-body">
                <div className="d-flex align-items-center">
                <i className="bi bi-linkedin fs-1 mb-3 text-primary me-3"></i>
                <h5 className="card-title">LinkedIn</h5>
                </div>
                <p className="conatct-text">
                  <a href="https://www.linkedin.com/in/mohd-rafi-64258a65/" target="_blank" rel="noreferrer">Connect on LinkedIn</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
