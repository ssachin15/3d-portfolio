import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Job Tracker Client",
    category: "Job application dashboard and tracker",
    tools: "ReactJS · Vercel · GitHub · Responsive UI",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fjob-tracker-client-pi.vercel.app%2F?w=1200",
    link: "https://job-tracker-client-pi.vercel.app/",
    desc: [
      "Built to manage and monitor job applications in a clean, searchable dashboard flow.",
      "Deployed on Vercel for fast access and easy sharing.",
      "Source code: https://github.com/ssachin15/job-tracker-client"
    ]
  },
  {
    title: "REACTJOBS",
    category: "React jobs board and application interface",
    tools: "ReactJS · GitHub · Responsive UI",
    image: "/images/reactjobs-dashboard.svg",
    link: "https://github.com/ssachin15/REACTJOBS",
    desc: [
      "Built as a React-based jobs project for browsing and managing job listings.",
      "Kept the project accessible through the GitHub repository.",
      "Features a clean dashboard UI for tracking jobs and applications."
    ]
  },
  {
    title: "Job Tracker API",
    category: "Job tracking backend API",
    tools: "Node.js · Express.js · MongoDB · REST API · GitHub",
    image: "/images/job-tracker-api.svg",
    link: "https://github.com/ssachin15/job-tracker-api",
    desc: [
      "Built as the backend API for tracking job-related data and workflow actions.",
      "Source code is available on GitHub for review and reuse.",
      "RESTful API with GET, POST, PUT, DELETE endpoints for job management."
    ]
  },
  {
    title: "E-Commerce REST API",
    category: "Secure & Layered E-Commerce Backend",
    tools: "Node.js · Express.js · MongoDB · JWT · Bcrypt.js · Docker · GitHub Actions",
    image: "/images/ecommerce_api.png",
    link: "https://github.com/ssachin15/E-COMMERCE",
    desc: [
      "Zero unauthorized access incidents by architecting role-based JWT auth & bcrypt hashing.",
      "Reduced coupling by 40% using route → controller → middleware → model layering.",
      "Caught 12 edge-case bugs pre-deployment via a 35-case Postman test suite in CI/CD pipeline."
    ]
  },
  {
    title: "Task Manager API",
    category: "Production-ready Task Management Backend",
    tools: "Node.js · Express.js · MongoDB · JWT · Docker · GitHub Actions · Render",
    image: "/images/task_manager.png",
    link: "https://github.com/ssachin15/task-manager-api",
    desc: [
      "Designed User-Task MongoDB schemas with compound indexes, cutting query time from 200ms to 60ms.",
      "Shipped API to Render with zero-downtime deploys using GitHub Actions CI/CD.",
      "Stress-tested 20+ concurrent & malformed payload scenarios with zero production failures."
    ]
  },
  {
    title: "LeetMetric Tracker",
    category: "LeetCode Progress Tracker & Analytics",
    tools: "ReactJS · REST APIs · GitHub Pages · Chrome Lighthouse",
    image: "/images/leetmetric.png",
    link: "https://ssachin15.github.io/Portfolio",
    desc: [
      "Built a public analytics dashboard used by 50+ peers, averaging 30+ sessions/week.",
      "Cut load time from 4.1s to 1.8s (Lighthouse score: 91/100) via lazy-loading & skeleton screens.",
      "Gracefully handled all API timeouts and invalid input states with zero application crashes."
    ]
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.desc && (
                          <div className="carousel-desc" style={{ marginTop: '12px' }}>
                            <span className="tools-label" style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '400', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px' }}>Impact & Features</span>
                            <ul style={{ paddingLeft: '16px', margin: 0, color: '#adacac', fontWeight: 200, fontSize: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              {project.desc.map((bullet, idx) => (
                                <li key={idx} style={{ lineHeight: '1.4' }}>{bullet}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
