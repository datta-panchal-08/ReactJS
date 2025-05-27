import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-yellow-50 text-gray-800 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center text-yellow-700">
        About Us
      </h1>

      <div className="max-w-4xl text-center space-y-6">
        <p className="text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-yellow-600">FlavorNest</span> – your go-to destination for discovering delightful, easy-to-make recipes from around the world. Whether you’re a beginner in the kitchen or a seasoned home chef, we have something for everyone!
        </p>

        <p className="text-lg leading-relaxed">
          Our goal is to bring people together through food. We believe that every recipe tells a story, and through this platform, we aim to share the magic of cooking with a global community. From refreshing beverages to hearty main courses and indulgent desserts – every category is crafted with love and care.
        </p>

        <p className="text-lg leading-relaxed">
          We carefully curate our recipe collection to ensure each dish is not only tasty but also easy to prepare with step-by-step instructions and readily available ingredients.
        </p>

        <p className="text-lg leading-relaxed">
          Thank you for visiting. Let’s cook, share, and celebrate the joy of good food – together! 🍲✨
        </p>

        <p className="text-sm text-gray-500 mt-10">
          Made with ❤️ by the Dattatray Panchal 
        </p>
      </div>
    </div>
  );
};

export default About;
