import React from 'react';
import qrCode from '../assets/qr-code.png';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* This is About Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">About This Website</h1>
      
      {/* Thte Description */}
      <div className="mb-8">
        <p className="text-lg text-gray-700">
          Welcome to the Movie Finder website! This platform allows you to search for your favorite movies, 
          browse trending titles, and explore detailed information about any movie. Powered by the TMDb API, 
          this site is designed to provide a seamless and user-friendly movie discovery experience.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          If you enjoy using this website and would like to support its development, consider making a donation. 
          Every contribution, big or small, is greatly appreciated and will help me continue improving the platform!
        </p>
      </div>

      {/* Donation Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Support Us with a Donation ❤️</h2>
        <p className="text-lg text-gray-700 mb-4">
          To show your support, you can scan the QR code below to send your donation directly to my bank account.
          Thank you for your generosity!
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-4">
          <img
            src={qrCode}
            alt="Donate via QR Code"
            className="w-80 h-auto border rounded-lg shadow-lg"
          />
        </div>

        {/* Contact via email to get more detail/service */}
        <p className="text-lg font-semibold text-gray-700">
          If you'd prefer, you can also contact me via email for direct support:
        </p>
        <a
          href="mailto:kimkheangmac8055@gmail.com"
          className="text-blue-500 underline text-lg"
        >
          kimkheangmac8055@gmail.com
        </a>
      </div>

      {/* Thank-You message to user*/}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-green-600">Thank You! 🌟</h2>
        <p className="text-lg text-gray-700 mt-2">
          I’m incredibly grateful for your support. Your contributions help make this project possible, and I deeply
          appreciate your generosity.
        </p>
      </div>
    </div>
  );
};

export default About;
