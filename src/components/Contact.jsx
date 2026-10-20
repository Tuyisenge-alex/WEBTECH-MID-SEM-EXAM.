import { useState } from "react";

function Contact() {
  // state: what the user types need or wants 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // state: error messages and success message
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading which is a good act 
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Please enter your full name.";
    }// catching some errors and handling them

    if (email.trim() === "") {
      newErrors.email = "Please enter your email address.";
    } else if (!email.includes("@") || !email.includes(".")) {
      newErrors.email = "Please enter a valid email, e.g. name@example.com.";
    }

    if (message.trim() === "") {
      newErrors.message = "Please write a message.";
    }

    setErrors(newErrors);

    // if there are no errors, the form is valid
    if (Object.keys(newErrors).length === 0) {
      setSuccess("Thank you! Your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setSuccess("");
    }
  }

  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>

      <address className="contact-info">
        <p><strong>Address:</strong> KG 123 Street, Kigali, Rwanda</p>
        <p><strong>Telephone:</strong> +250 788 000 000</p>
        <p><strong>Email:</strong> info@brightfuturelibrary.org</p>
      </address>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send Message</button>
        {success && <p className="success">{success}</p>}
      </form>
    </section>
  );
}

export default Contact;  // and here we are done with our contact 
