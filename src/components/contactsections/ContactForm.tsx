import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add logic to send form data to backend or email here
  };

  return (
    <div>
      <section className="grid md:grid-cols-2 gap-6 px-3 md:px-10 py-5 max-w-screen-2xl mx-auto border-gray-300 border-b-2">
      <div>
              <h2 className="text-2xl font-bold mb-6 text-black">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-yellow-600 rounded-md p-2 text-black"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-yellow-600 rounded-md p-2 text-black"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full border border-yellow-600 rounded-md p-2 text-black"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
      </div>
            <div className="bg-primary p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Get in Touch Maison Flavour
              </h3>
              <p>
                At Maison Flavour, we believe in creating meaningful connections
                 with our guests. Whether you have questions, need assistance,
                  or want to share your feedback — we’re here for you.
              </p>
      
              <div className="mt-4 text-sm">
                <p>
                    Maison Flavour is a B2B platform crafted to connect restaurants and food businesses with premium
                    suppliers. We simplify procurement by offering a curated marketplace,
                    seamless ordering, and transparent pricing.
                    Explore how Maison Flavour empowers your kitchen — from sourcing 
                    quality ingredients to managing vendor relationships, all in one place. Grow smarter, cook better.
                </p>
                <div className="mt-4">
                  <div className="mt-2 flex space-x-4">
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
  );
};

export default ContactForm;
