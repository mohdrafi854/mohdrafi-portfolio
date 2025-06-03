function Hero() {
  return (
    <div className="p-3 p-md-5 mb-4" id="hero">
      <div className="container py-5">
        <h1 className="display-2 fw-bold">Mohd Rafi</h1>
        <h4 className="h4 ">Fullstack Dev</h4>
        <p className="lead mb-2 lead-18 mt-4">
          MERN Stack Developer crafting full-stack <br /> web apps with MongoDB,
          Express, React, and Node.js.
        </p>
        <p className="lead mb-4 lead-18">
          Focused on developing scalable, high-performance applications using
          React, <br />
          Node.js, and MongoDB, with a strong emphasis on user experience.
        </p>
        <a href="#connect" className="btn btn-primary">
          Get in Touch
        </a>
        <a href="/resume.pdf" target="_blank" className="btn btn-outline-secondary ms-3" download>
          Download Resume
        </a>
      </div>
    </div>
  );
}
export default Hero;
