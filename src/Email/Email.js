

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Email.css';

const Email = (props) => {
  // Use destructuring to directly get 'history' from 'props'
  const { history } = props;

  // Ref for the form element
  const form = useRef();

  // Function to send email
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // Use async/await for better readability and error handling
      const result = await emailjs.sendForm(
        'service_n5w6pck',
        'template_9c0aj98',
        form.current,
        'RuOh4MuvJuV8MsSJY'
      );

      console.log(result.text);

      // Reset the form only after the email has been sent successfully
      e.target.reset();

      // Alert and redirect after successful email send
      alert('Message Sent Successfully');
      history.replace('/');
    } catch (error) {
      console.error(error.text);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="Email">
      <h3>Share details for assistance</h3>
      <label>Name :</label>
      <div>
        <input type="text" name="from_name" placeholder="Enter Your Name" required />
      </div>

      <label>Email :</label>
      <div>
        <input type="email" name="to_name" placeholder="Enter Your Email" required />
      </div>

      <label>Message :</label>
      <div>
        <textarea name="message" placeholder="Enter Your Message" required />
      </div>

      <input type="submit" value="Send" className="Resume" />
      
    </form>
  );
};

export default Email;
