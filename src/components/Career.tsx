import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee Software Engineer</h4>
                <h5>CureMD Lahore</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Trainee Software Engineer at CureMD, Lahore,
               where I worked on healthcare software applications using Angular, .NET, and SQL
                Server. I gained hands-on experience in frontend development, backend APIs, 
                database integration, and building EMR-based features in a professional
                 corporate environment.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Student</h4>
                <h5>Corvit Systems Lahore</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a 3-month MERN Stack course at Corvit Systems Lahore,
               gaining hands-on experience in MongoDB, Express.js, React, and Node.js. 
               Built practical web applications and strengthened my skills in frontend, backend,
                REST APIs, and database integration.

            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
