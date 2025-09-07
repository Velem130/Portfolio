import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('access_key', '1a6878ac-3809-41fa-afa3-2cd09e39a66c');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setFormStatus('success');
        event.target.reset();
        console.log('Success:', data);
      } else {
        setFormStatus('error');
        console.error('Submission failed:', data);
      }
    } catch (error) {
      setFormStatus('error');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section  id="contact" className="bg-blue-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
          <p className="mb-6 text-gray-200">
            I'm currently looking for internship opportunities and freelance projects. Whether you have a question or just want to say hi, I’ll do my best to get back to you!
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" />
              <span>mlulekivelem@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-yellow-400" />
              <span>+27 84 048 9731</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Johannesburg University of Technology, Johannesburg, South Africa</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-yellow-400"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-yellow-400"><FaGithub size={24} /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram size={24} /></a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
            >
              Send Message
            </button>

            {formStatus === 'success' && (
              <p className="text-green-600 mt-4">Message sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 mt-4">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;

