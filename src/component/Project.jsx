const Project = () => {
  return (
    <section className="sec-02 py-5" id="projects">
      <div className="container">
        <div>
        <h2 className="mb-2 display-4 fw-bold">My Projects</h2>
        <h5 className="mb-5">Engineering solutions that make a real-world difference.</h5>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card h-100 card-custom">
              <img src="output.jpg" height={224} alt="" />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title h4">Ecommerce App</h3>
                <p className="card-text">
                  A full-featured E-commerce web application built to enables users to browse products, 
                  manage their carts and wishlists user manage products, categories, orders, 
                  and users through a dedicated dashboard.
                </p>
                <div className="mb-3">
                  <span class="badge bg-secondary me-1">MongoDB</span>
                  <span class="badge bg-secondary me-1">Express</span>
                  <span class="badge bg-secondary me-1">React</span>
                  <span class="badge bg-secondary me-1">Node.js</span>
                </div>
                <div>
                  <a
                    href="https://internetshopping.vercel.app"
                    target="_blank"
                    className="btn btn-primary btn-sm me-2"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/mohdrafi854/Ecommerce-Frontend"
                    target="_blank"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-custom">
              <img src="meetup-app-img.jpg" height={224} alt="" />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title h4">Meetup App</h3>
                <p className="card-text">
                  A full-stack event web app built with the MERN stack (MongoDB,
                  Express.js, React, Node.js). Users can browse upcoming events
                  on the landing page, search by title, filter by
                  online/offline, and view detailed event.
                </p>
                <div className="mb-3">
                  <span class="badge bg-secondary me-1">MongoDB</span>
                  <span class="badge bg-secondary me-1">Express</span>
                  <span class="badge bg-secondary me-1">React</span>
                  <span class="badge bg-secondary me-1">Node.js</span>
                </div>
                <div>
                  <a
                    href="https://meetup-event.vercel.app/"
                    target="_blank"
                    className="btn btn-primary me-2 btn-sm"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/mohdrafi854/meetupAppFrontend"
                    target="_blank"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm card-custom">
              <img src="lead-management-img.jpg" height={224} alt="" />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title h4">Anvaya CRM App</h3>
                <p className="card-text">
                  The Anvaya CRM app will focus on lead management with defined
                  steps for each lead's lifecycle. We will assign sales agents
                  to leads and allow users to add comments or updates to each
                  lead.
                </p>
                <div className="mb-3">
                  <span class="badge bg-secondary me-1">MongoDB</span>
                  <span class="badge bg-secondary me-1">Express</span>
                  <span class="badge bg-secondary me-1">React</span>
                  <span class="badge bg-secondary me-1">Node.js</span>
                </div>
                <div>
                  <a
                    href="https://anvayafrontend.vercel.app"
                    target="_blank"
                    className="btn btn-primary me-2 btn-sm"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/mohdrafi854/anvaya-crm-frontend"
                    target="_blank"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-custom">
              <img src="task-img.jpg" height={224} alt="" />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title h4">Workasana Task App</h3>
                <p className="card-text">
                  Workasana is a task management and team collaboration tool
                  where users can create projects, assign tasks to teams and
                  owners, set deadlines, and organize work using tags. It
                  supports authentication, dynamic filtering.
                </p>
                <div className="mb-3">
                  <span class="badge bg-secondary me-1">MongoDB</span>
                  <span class="badge bg-secondary me-1">Express</span>
                  <span class="badge bg-secondary me-1">React</span>
                  <span class="badge bg-secondary me-1">Node.js</span>
                </div>
                <div>
                  <a
                    href="https://workasana-task.vercel.app"
                    target="_blank"
                    className="btn btn-primary me-2 btn-sm"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/mohdrafi854/Workasana-frontend"
                    target="_blank"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;
