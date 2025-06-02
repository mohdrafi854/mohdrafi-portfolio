const Contact = () => {
  return (
    <section className="sec-04 py-5">
      <div className="container">
        <h2 className="text-center mb-5">Contact</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <i class="bi bi-github fs-1 mb-3"></i>
                <h5 className="card-title">GitHub</h5>
                <a
                  href="https://github.com/mohdrafi854"
                  target="_blank"
                  class="stretched-link"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <i class="bi bi-linkedin fs-1 mb-3 text-primary"></i>
                <h5 class="card-title">LinkedIn</h5>
                <a
                  href="https://www.linkedin.com/in/mohd-rafi-64258a65/"
                  target="_blank"
                  class="stretched-link"
                >
                  Connect with me
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
