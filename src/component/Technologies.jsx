const Technologies = () => {
  return (
    <section className="sec-03 py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Technologies</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <ul className="list-unstyled">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <ul className="list-unstyled">
              <li>React</li>
              <li>Redux</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <ul className="list-unstyled">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>JWT Auth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Technologies;
