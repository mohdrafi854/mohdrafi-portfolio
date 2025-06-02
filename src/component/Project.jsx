const Project = () => {
  return (
    <section className="sec-02 py-5" id="projects">
      <div className="container">
        <h2 className="text-center mb-5">My Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">Ecommerce App</h3>
                <p className="card-text">
                  A full-stack MERN application with user auth, product
                  management, and shopping cart.
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
                    className="btn btn-primary me-2"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/mohdrafi854/Ecommerce-Frontend"
                    target="_blank"
                    className="btn btn-outline-secondary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">Meetup App</h3>
                <p className="card-text">
                  A full-stack event web app built with the MERN stack (MongoDB,
                  Express.js, React, Node.js). Users can browse upcoming events
                  on the landing page, search by title, filter by
                  online/offline, and view detailed event info with a single
                  click.
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
                    className="btn btn-primary me-2"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/mohdrafi854/meetupAppFrontend"
                    target="_blank"
                    className="btn btn-outline-secondary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">Anvaya CRM App</h3>
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
                    className="btn btn-primary me-2"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/mohdrafi854/anvaya-crm-frontend"
                    target="_blank"
                    className="btn btn-outline-secondary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">Workasana Task App</h3>
                <p className="card-text">
                  Workasana is a task management and team collaboration tool
                  where users can create projects, assign tasks to teams and
                  owners, set deadlines, and organize work using tags. It
                  supports authentication, dynamic filtering, URL-based queries,
                  and reporting features to track task progress and team
                  productivity.
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
                    className="btn btn-primary me-2"
                  >
                    View Demo
                  </a>
                  <a
                    href="https://github.com/mohdrafi854/Workasana-frontend"
                    target="_blank"
                    className="btn btn-outline-secondary"
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
