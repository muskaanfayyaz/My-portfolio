// pages/licenses.js
import React from 'react';
import Image from 'next/image';

const Licenses = () => {
  const certifications = [
    {
      title: 'Microsoft Azure AI Fundamentals: AI Overview',
      issuer: 'Microsoft',
      issued: 'Aug 2024',
      skills: 'Microsoft Azure · Artificial Intelligence (AI) · Azure AI · Fundamental AI',
      image: '/microsoft-azure-ai.png',
    },
    {
      title: 'Microsoft Azure Fundamentals: Describe Cloud Concepts',
      issuer: 'Microsoft',
      issued: 'Aug 2024',
      skills: 'Cloud Computing · Cloud Services',
      image: '/microsoft-azure-fundamentals.png',
    },
    {
      title: 'Freelancing Certificate',
      issuer: 'DigiSkills.pk',
      issued: 'Jul 2024',
      skills: 'Freelancing · Communication',
      image: '/freelancing.png',
    },
    {
      title: 'Mastering GitHub Workshop',
      issuer: 'CosmiCode',
      issued: 'Jul 2024',
      skills: 'GitHub · Version Control · Collaboration',
      image: '/github-workshop.png',
    },
    {
      title: 'Mastering LinkedIn Webinar',
      issuer: 'CosmiCode',
      issued: 'Jul 2024',
      skills: 'LinkedIn · LinkedIn Training · LinkedIn Learning',
      image: '/linkedin-webinar.png',
    },
    {
      title: 'The Legend of Python',
      issuer: 'Codédex',
      issued: 'Jun 2024',
      skills: 'Python · OOP · Data Structures',
      image: '/python-legend.png',
    },
    {
      title: 'CodSoft Internship',
      issuer: 'CodSoft',
      issued: 'May 2024',
      skills: 'C++ · Programming',
      image: '/codsoft-internship.png',
    },
    {
      title: 'TypeScript Quiz',
      issuer: 'ProProfs',
      issued: 'May 2024',
      skills: 'TypeScript',
      image: '/typescript-quiz.png',
    },
    {
      title: 'Certified Cloud Applied Generative AI Engineer',
      issuer: 'Governor Sindh Initiative for GenAI, Web3, and Metaverse',
      issued: 'Feb 2024',
      skills: 'HTML5 · Python · TypeScript · CSS 3 · Next.Js · Tailwind CSS',
      image: '/generative-ai.png',
    },
    {
      title: 'Cosmicode Coding Quiz Challenge (C++ & Python)',
      issuer: 'CosmiCode',
      skills: 'C++ · Python · Problem Solving',
      image: '/coding-quiz.png',
    },
  ];

  return (
    <section className="licensesSection">
      <h2 className="title">Licenses & Certifications</h2>
      <div className="certificationsGrid">
        {certifications.map((cert, index) => (
          <div key={index} className="certificationCard">
            <Image 
              src={cert.image} 
              alt={`${cert.title} certificate`} 
              className="certificateImage"
              width={300} 
              height={200} 
              layout="responsive"
              objectFit="cover"
            />
            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="issued">Issued: {cert.issued}</p>
            <p className="skills">{cert.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Licenses;
