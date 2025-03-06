import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Projects.css";

const projects = [
  {
    title: "Large-Scale Vector Database System for Passage Retrieval",
    description:
      "A scalable vector database system for dense passage retrieval using Apache Spark, pre-trained embeddings, and HNSW indexing.",
    techStack: [
      { name: "Apache Spark", icon: "devicon-apachespark-original" },
      { name: "AWS Lambda", icon: "devicon-amazonwebservices-original" },
      { name: "HNSW Indexing", icon: "fas fa-database" },
    ],
    date: "September 2024 – December 2024",
  },
  {
    title: "Fake News Detection",
    description:
      "A fake news detection system using BERT embeddings and SVM, achieving high accuracy in classifying misinformation with the LIAR dataset.",
    techStack: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "BERT", icon: "fas fa-brain" },
      { name: "SVM", icon: "fas fa-chart-line" },
    ],
    date: "September 2023 – December 2023",
  },
  {
    title: "Chesspresso",
    description:
      "A hybrid chess platform integrating Swing, Java AWT, and Java Socket for seamless multiplayer gameplay, real-time data tracking, and an interactive UI.",
    techStack: [
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Swing", icon: "fas fa-chess" },
      { name: "Sockets", icon: "fas fa-network-wired" },
    ],
    date: "September 2023 – December 2023",
  },
  {
    title: "Elderly Care Using Fall Detection System",
    description:
      "A fall detection system integrating YOLO, OpenPose, and Audio Toolbox to assist elderly individuals in real-time, achieving 90% accuracy.",
    techStack: [
      { name: "YOLO", icon: "fas fa-eye" },
      { name: "OpenPose", icon: "fas fa-person-booth" },
      { name: "Audio Toolbox", icon: "fas fa-microphone" },
    ],
    date: "August 2022 – May 2023",
  },
  {
    title: "Global Sales Data Analytics - IBM",
    description:
      "A predictive analytics dashboard in IBM Cognos, enabling sales teams to uncover patterns and drive revenue growth through data-driven insights.",
    techStack: [
      { name: "IBM Cognos", icon: "fas fa-chart-bar" },
      { name: "Predictive Analytics", icon: "fas fa-lightbulb" },
    ],
    date: "August 2022 – December 2022",
  },
  {
    title: "Smart Meter Systems",
    description:
      "An energy analytics system to predict electricity consumption trends for Tamil Nadu Electricity Board.",
    techStack: [
      { name: "Arduino", icon: "devicon-arduino-plain" },
      { name: "GSM Shield", icon: "fas fa-signal" },
      { name: "C++", icon: "devicon-cplusplus-plain" },
    ],
    date: "March 2022 – May 2023",
  },
  {
    title: "Result Analysis System",
    description:
      "A robust MERN-stack application for multi-user authentication and data visualization.",
    techStack: [
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "React.js", icon: "devicon-react-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
    ],
    date: "March 2022 – June 2022",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function Projects() {
  return (
    <div className="page-container">
    <div className="projects-section">
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">
                  <i className={tech.icon}></i> {tech.name}
                </span>
              ))}
            </div>
            <span className="project-date">{project.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Projects;
