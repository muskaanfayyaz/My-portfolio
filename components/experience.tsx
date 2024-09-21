import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      
      {/* Oasis Infobyte Internship */}
      <div className="experience-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyq7rG9Y9tkmDZLIzbnde7wd08wokqwaSAlA&s" alt="Oasis Infobyte Logo" className="experience-logo" />
        <div className="experience-content">
          <h3>Python Developer</h3>
          <h4>Oasis Infobyte · Internship</h4>
          <p>May 2024 - Jun 2024 · 2 mos | Karachi, Sindh, Pakistan · Remote</p>
          <p>🌟 Embarked on a thrilling journey as a Python Developer Intern at Oasis Infobyte! 🚀 Delighted to be part of this dynamic team, immersing myself in Python development and pushing boundaries.</p>
          <ul>
            <li><strong>Skills:</strong> Python (Programming Language), Programming, Problem Solving</li>
          </ul>
        </div>
      </div>

      {/* CodSoft Internship */}
      <div className="experience-card">
        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=608,fit=crop,q=95/Aq20eV79zLfpXV6b/logo-png-mnl7npnlXjHPl9KV.png" alt="CodSoft Logo" className="experience-logo" />
        <div className="experience-content">
          <h3>C++ Developer</h3>
          <h4>CodSoft · Internship</h4>
          <p>Apr 2024 - May 2024 · 2 mos | Karachi Division, Sindh, Pakistan · Remote</p>
          <p>🌟 Embarked on an exciting journey as a C++ Developer Intern at CodSoft! 🚀 Thrilled to collaborate with innovative minds, advancing my skills in C++ development and problem-solving techniques.</p>
          <ul>
            <li><strong>Skills:</strong> C++, Time Management, Problem Solving</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
