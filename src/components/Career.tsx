import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Journey <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chandigarh University</h4>
                <h5>Bachelor of Engineering — CSE</h5>
              </div>
              <h3>2022–PRES</h3>
            </div>
            <p>
              Pursuing a Bachelor of Engineering in Computer Science & Engineering in Chandigarh, India. Focusing on Data Structures & Algorithms, Object-Oriented Programming, System Design, and Full-Stack development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Competitive Programming</h4>
                <h5>LeetCode · Top 20% Globally</h5>
              </div>
              <h3>STREAK</h3>
            </div>
            <p>
              Solved 100+ problems on LeetCode with an active 6-month streak. Mastery in Hashing, Arrays, Sliding Window, Recursion, and Dynamic Programming with time/space complexity verification on GitHub.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GeeksforGeeks Certification</h4>
                <h5>AI Tools Skill Up</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed hands-on certification training on generative AI platforms, productivity automation, and practical AI applications in software development workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SAI Public School</h4>
                <h5>Intermediate (CBSE Class XII)</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Completed high school education in Kashipur, India, establishing solid analytical and logical fundamentals in mathematics and computer science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
