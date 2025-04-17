import "./pages.css";
import React, {useState} from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const {id, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server here
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset the form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page-container contact-container">
      <h1>Contact Audi Excellence</h1>

      <div className="contact-intro">
        <p>
          We're here to answer any questions you may have about our vehicles or
          services. Reach out to us and we'll respond as soon as possible.
        </p>
      </div>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select a subject</option>
              <option value="sales">Sales Inquiry</option>
              <option value="service">Service & Maintenance</option>
              <option value="testdrive">Schedule Test Drive</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="How can we help you?"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className={submitted ? "btn-submitted" : ""}>
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>

        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Visit Our Showroom</h3>
              <p>
                123 Automotive Boulevard
                <br />
                Silicon Valley, CA 94043
                <br />
                United States
              </p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-phone-alt"></i>
            <div>
              <h3>Call Us</h3>
              <p>
                Sales: +1 (555) 123-4567
                <br />
                Service: +1 (555) 234-5678
                <br />
                Support: +1 (555) 345-6789
              </p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email Us</h3>
              <p>
                Sales: sales@audiexcellence.com
                <br />
                Support: support@audiexcellence.com
                <br />
                Press: media@audiexcellence.com
              </p>
            </div>
          </div>

          <div className="location-map">
            <img
              src="https://picsum.photos/id/1031/600/300"
              alt="Office location map"
            />
            <p>
              Opening Hours: Monday-Friday 9AM-7PM, Saturday 10AM-5PM, Sunday
              Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
