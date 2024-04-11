import React, { useState } from 'react';
import styles from './styles/contactStyle.module.css'; // Adjust the path if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission here
    // For example, send formData to an API endpoint
    console.log(formData);
    // Reset form fields after submission if needed
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className={styles.contactContainer}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <h2 className={styles.contactTitle}>Contact Niek</h2>

        <label htmlFor="name" className={styles.contactLabel}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.contactInput}
        />

        <label htmlFor="email" className={styles.contactLabel}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.contactInput}
        />

        <label htmlFor="message" className={styles.contactLabel}>Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.contactTextarea}
        />

        <button type="submit" className={styles.contactButton}>Send</button>
      </form>
    </div>
  );
};

export default Contact;