import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">About Me</h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-4">
          Hello! I'm [Your Name], a passionate developer with a focus on [Your Focus Area, e.g., Web Development, Mobile App Development, etc.].
        </p>
        <p className="mb-4">
          I love creating innovative solutions to complex problems and enjoy learning new technologies to enhance my skills.
        </p>
        <p className="mb-4">
          This portfolio showcases some of my projects and experiences. Feel free to explore!
        </p>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-4 mb-4">
          <li>JavaScript (including frameworks like React.js)</li>
          <li>HTML5 & CSS3 (with preprocessors like Sass)</li>
          <li>Backend development (Node.js, Express)</li>
          <li>Database management (SQL and NoSQL databases)</li>
          <li>Version control (Git, GitHub)</li>
          <li>Responsive web design</li>
          <li>UI/UX design principles</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <p className="mb-4">Provide details about your relevant work experience.</p>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p className="mb-4">List your educational background.</p>
      </div>
    </div>
  );
};

export default AboutPage;
