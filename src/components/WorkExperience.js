import React from "react";
import "./WorkExperience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Oracle America, Inc",
    role: "Software Engineer Intern",
    date: "May 2024 – August 2024",
    description: [
      "Evaluated and fine-tuned data for Select AI, reducing NLP response time by 25%.",
      "Developed and applied ML algorithms for data analysis, improving prediction accuracy.",
      "Managed large datasets with autonomous databases, achieving 30% faster integration."
    ]
  },
  {
    company: "Citigroup Inc. – Citi Technology Infrastructure",
    role: "Summer Analyst Intern",
    date: "May 2022 – July 2022",
    description: [
      "Developed Build Tracking and Reporting System (BTRS), reducing paperwork by 80%.",
      "Improved user engagement by 25% using Angular, Spring Boot, and MySQL.",
      "Enhanced ICG Middleware Support Knowledge Base."
    ]
  },
  {
    company: "Capgemini Technology Services India Limited",
    role: "Research Intern – Medical Imaging Solutions",
    date: "August 2021 – September 2021",
    description: [
      "Built a 3D/2D Medical Image Viewer using Three.js and WebGL.",
      "Designed a UI for medical image merging, benefiting 850+ users."
    ]
  },
  {
    company: "Fanisko",
    role: "Software Development Engineer Intern",
    date: "February 2021 – August 2021",
    description: [
      "Developed a REST API-based website and login system using Python, Flask, MySQL.",
      "Built a cross-platform Flutter app with 95% satisfaction rate.",
      "Optimized image compression algorithms, reducing lag time by 3s."
    ]
  },
  {
    company: "Fahmy Furniture LLC",
    role: "Software Engineer Intern",
    date: "December 2020 – February 2021",
    description: [
      "Enhanced Oracle Database ERP implementations through analysis and design.",
      "Increased testing efficiency by 33% using ORION 11j Java Version."
    ]
  },
  {
    company: "Capgemini Technology Services India Limited",
    role: "Software Development Engineer Intern",
    date: "October 2020 – November 2020",
    description: [
      "Developed a 'Miniature Automated Teller Machine' with SDLC methodologies.",
      "Analyzed review logs to systematize business requirements."
    ]
  }
];

function WorkExperience() {
  return (
    <div className="page-container">

      <motion.h2
        className="work-experience-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Work Experience
      </motion.h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-title">{exp.company}</h3>
            <p className="experience-role">{exp.role}</p>
            <p className="experience-date">{exp.date}</p>
            <div className="experience-description">
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
