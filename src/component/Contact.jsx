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
                <i class="bi bi-envelope fs-1 mb-3 me-3"></i>
                <h5 className="card-title">Email</h5>
                </div>
                <p>mohd.rafi854@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm card-custom">
              <div className="card-body">
                <div className="d-flex align-items-center">
                <i class="bi bi-github fs-1 mb-3 me-3"></i>
                <h5 className="card-title">GitHub</h5>
                </div>
                <p>Follow on GitHub</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm card-custom">
              <div class="card-body">
                <div className="d-flex align-items-center">
                <i class="bi bi-linkedin fs-1 mb-3 text-primary me-3"></i>
                <h5 class="card-title">LinkedIn</h5>
                </div>
                <p>Connect on LinkedIn</p>
              </div>
            </div>
          </div>

          {/* <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm card-custom">
              <div class="card-body">
                <i class="bi bi-file-earmark-text fs-1 mb-3 text-success"></i>
                <h5 class="card-title">Resume</h5>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  class="stretched-link"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default Contact;
