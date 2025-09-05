import { Element } from "react-scroll";

const Technologies = () => {
  return (
    <Element name="technology">
      <section className="sec-03 py-5">
        <div className="container">
          <h2 className="mb-2 display-4 fw-bold">Technology Stack</h2>
          <h5 className="mb-5">Tech Stack I Specialize In</h5>
          <div className="row">
            <div className="col-6 col-md-4 mb-4">
              <ul className="list-unstyled">
                <li className="mb-4">HTML</li>
                <li className="mb-4">CSS</li>
                <li className="mb-4">JavaScript</li>
                <li className="mb-4">Bootstrap</li>
                <li className="mb-4">Git</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 mb-4">
              <ul className="list-unstyled">
                <li className="mb-4">React</li>
                <li className="mb-4">Redux</li>
                <li className="mb-4">Tailwind CSS</li>
                <li className="mb-4">TypeScript</li>
                <li className="mb-4">REST APIs</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 mb-4">
              <ul className="list-unstyled">
                <li className="mb-4">Node.js</li>
                <li className="mb-4">Express.js</li>
                <li className="mb-4">MongoDB</li>
                <li className="mb-4">SQL</li>
                <li className="mb-4">JWT Auth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};
export default Technologies;
