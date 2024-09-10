import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
