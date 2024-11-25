import React from 'react';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white shadow-md py-4">
        <h1 className="text-center text-3xl font-bold text-pink-600">About Us</h1>
      </header>

      {/* Image Section */}
      <div className="w-full max-w-4xl mt-8">
        <img
          src={assets.about_icon}
          alt="About Us"
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>

      {/* Main Content */}
      <main className="w-full max-w-4xl p-6 bg-white rounded-md shadow-md mt-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our world of beauty and elegance! At <strong>RentIt</strong>, we
            believe in empowering every individual to express their unique style and personality.
            Our journey started with a passion for creating high-quality cosmetics that inspire
            confidence and creativity.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make beauty accessible, inclusive, and innovative. We’re committed to
            providing top-notch products crafted with love and care, ensuring that you always feel
            your best.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>High-quality, cruelty-free products.</li>
            <li>A diverse range of options tailored to every individual.</li>
            <li>Commitment to sustainability and ethical practices.</li>
          </ul>
        </section>
      </main>

      {/* NewsletterBox Section */}
      <section className="w-full max-w-4xl mt-6">
        <NewsletterBox />
      </section>

      {/* Footer */}
      <footer className="w-full bg-white py-4 mt-auto text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Kylie Cosmetics. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;

