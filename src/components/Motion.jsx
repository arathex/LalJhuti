// components/Contact.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can plug this into Formspree, Netlify Forms, or Firebase
    console.log('Submitted:', form);
    alert('Your message has been sent with love 💌');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 to-yellow-100 py-12 px-6 rounded-xl shadow-xl max-w-3xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-rose-600 mb-6"
      >
        💌 Contact
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full p-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        />

        <motion.input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
          className="w-full p-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        />

        <motion.textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write something poetic, or just say hi!"
          rows="5"
          className="w-full p-3 rounded-lg border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        />

        <motion.button
          type="submit"
          className="bg-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message ✨
        </motion.button>
      </form>
    </section>
  );
}
