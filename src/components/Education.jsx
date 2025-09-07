import React from 'react';

const Education = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Education & Certifications
        </h2>

        <div className="relative border-l-4 border-yellow-400 ml-4">

          {/* 1. Diploma */}
          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5 border-2 border-white"></div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
              <p className="text-sm text-gray-500">2026 - Expected</p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Diploma in Information Technology</h3>
              <p className="text-gray-600">
                Johannesburg University of Technology, Johannesburg. Specializing in Software Development with coursework in web development, databases, and system analysis.
              </p>
            </div>
          </div>

          {/* 2. Full Stack Web Dev */}
          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5 border-2 border-white"></div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md ml-auto">
              <p className="text-sm text-gray-500">2024</p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Full Stack Web Development</h3>
              <p className="text-gray-600">
                FreeCodeCamp. Completed 300+ hours of coursework covering HTML, CSS, JavaScript, React and Node.js.
              </p>
            </div>
          </div>

          {/* 3. Python Specialization */}
          <div className="mb-10 ml-6">
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-2.5 top-1.5 border-2 border-white"></div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
              <p className="text-sm text-gray-500">2024</p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Python for Everybody Specialization</h3>
              <p className="text-gray-600">
                University of Michigan (Coursera). Five-course specialization covering Python fundamentals and data structures.
              </p>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Education;
