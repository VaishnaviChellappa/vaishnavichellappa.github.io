import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zn4r1bm",
        "template_oqdt2ve",
        form.current,
        "3wjYzlnXqcEwpqmXQ"
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Error sending message. Please try again.");
        }
      );
  };

  return (
    <div className="page-container">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="contact-title"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          whileHover={{ scale: 1.02 }}
        >
          <motion.input
            type="text"
            name="from_name"  // Updated field name
            placeholder="Your Name"
            required
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="email"
            name="reply_to"  // Updated field name
            placeholder="Your Email"
            required
            whileFocus={{ scale: 1.05 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="send-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            🚀 Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default Contact;
