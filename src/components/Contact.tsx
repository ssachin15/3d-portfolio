import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p style={{ margin: '4px 0' }}>
              <a
                href="https://www.linkedin.com/in/sachin-singh-4b51a2249"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Sachin Singh
              </a>
            </p>
            <p style={{ margin: '4px 0' }}>
              <a href="mailto:sachinsingh152004@gmail.com" data-cursor="disable">
                sachinsingh152004@gmail.com
              </a>
            </p>
            <p style={{ margin: '4px 0', color: '#adacac', fontSize: '15px' }}>
              +91 8449223163
            </p>
            <h4 style={{ marginTop: '20px' }}>Education</h4>
            <p style={{ margin: '4px 0' }}>
              B.E. Computer Science & Engineering, Chandigarh University — 2022–Present
            </p>
            <p style={{ margin: '4px 0' }}>
              Intermediate (CBSE Class XII), SAI Public School, Kashipur — 2021–2022
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/ssachin15"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-singh-4b51a2249"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:sachinsingh152004@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sachin Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
