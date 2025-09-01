import React from 'react';

const Resume = () => {
  return (
    <div className="p-6 bg-white rounded shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">Madhu Bagamma Gari</h1>
      <h2 className="text-xl text-gray-600 mb-4">
        Full Stack Python & Generative AI Developer
      </h2>

      {/* Summary */}
      <div className="mb-6">
        <p>
          Full Stack Python & Generative AI Developer with 2.9 years of
          experience in Python development, AI-driven solutions, and
          full-stack applications. Skilled in building agentic AI systems,
          LLM assistants, REST APIs, and scalable apps using Django, React,
          LangChain, and LangGraph.
        </p>
      </div>

      {/* Contact */}
      <h2 className="text-xl font-bold mb-2">Contact Information</h2>
      <p>
        <strong>Email:</strong>{' '}
        <a
          href="mailto:bagammagarimadhu@gmail.com"
          className="text-blue-500"
        >
          bagammagarimadhu@gmail.com
        </a>
      </p>
      <p>
        <strong>Phone:</strong> +91 99483 77187
      </p>
      <p>
        <strong>Portfolio:</strong>{' '}
        <a
          href="https://madhusunil.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          madhusunil.netlify.app
        </a>
      </p>
      <p>
        <strong>GitHub:</strong>{' '}
        <a
          href="https://github.com/MadhuSuniL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          github.com/MadhuSuniL
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{' '}
        <a
          href="https://www.linkedin.com/in/madhu-bagamma-gari-833a84239"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          linkedin.com/in/madhu-bagamma-gari
        </a>
      </p>
      <p>
        <strong>Location:</strong> Andhra Pradesh, India
      </p>

      {/* Education */}
      <h2 className="text-xl font-bold mt-6 mb-2">Education</h2>
      <p>
        <strong>B.Sc Computer Science</strong> – Rayalaseema University
        <br />
        06/2018 – 06/2021, Velgode, Andhra Pradesh, India
      </p>

      {/* Skills */}
      <h2 className="text-xl font-bold mt-6 mb-2">Skills</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Python, Django & Django REST Framework</li>
        <li>React.js, Next.js, Tailwind CSS, Bootstrap</li>
        <li>Data Structures, Pandas, NumPy, Web Scraping</li>
        <li>Django Channels, REST APIs, LLMs</li>
        <li>Machine Learning, Deep Learning, Generative AI</li>
        <li>LangChain, LangGraph, Agentic AI</li>
        <li>AWS, Docker, Azure</li>
      </ul>

      {/* Work Experience */}
      <h2 className="text-xl font-bold mt-6 mb-2">Work Experience</h2>

      <div className="mb-4">
        <p>
          <strong>Full Stack Python & Generative AI Developer</strong> – DTSkill
        </p>
        <p className="text-gray-600">09/2024 – Present | Remote</p>
        <ul className="list-disc list-inside">
          <li>
            Developed and integrated Generative AI applications, including
            agentic AI workflows and LLM-powered assistants using LangChain &
            LangGraph.
          </li>
          <li>
            Built RESTful APIs with Django & DRF to support AI-driven
            applications.
          </li>
          <li>
            Mentored junior developers and introduced innovative ideas to
            optimize workflows.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <p>
          <strong>Python Full Stack Developer</strong> – TechFnatic Information
          Technology & Services
        </p>
        <p className="text-gray-600">05/2023 – 09/2024 | Bangalore, India</p>
        <ul className="list-disc list-inside">
          <li>
            Built REST APIs using Django & DRF as part of full-stack
            development.
          </li>
          <li>
            Worked on frontend development with React.js & Next.js for seamless
            UX.
          </li>
          <li>
            Delivered full-stack features, bridging backend and frontend
            interfaces.
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <p>
          <strong>Django Developer</strong> – Simmi Foundation Organization
        </p>
        <p className="text-gray-600">10/2022 – 01/2023 | Remote</p>
        <ul className="list-disc list-inside">
          <li>
            Led backend development with Django, GitHub, and REST API design.
          </li>
          <li>
            Built user management & domain-specific APIs with DRF.
          </li>
          <li>
            Delivered scalable RESTful services for organizational projects.
          </li>
        </ul>
      </div>

      {/* Projects */}
      <h2 className="text-xl font-bold mt-6 mb-2">Projects</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>AI Agents with LLMs – Intelligent agent workflows with LangChain</li>
        <li>GPT Suite Like ChatGPT – Conversational app with history & custom AI</li>
        <li>CustomGPTs – Domain-specific GPT assistants</li>
        <li>Project Management Software – Task tracking & collaboration</li>
        <li>Customer/Lead Management Software – CRM tool</li>
        <li>User Management System & Controller – Role-based access & admin ops</li>
        <li>
          Geospatial Image Classification – Deep learning for satellite utility
          detection
        </li>
        <li>
          Mentor Recommendation System – Resume insights for mentor matching
        </li>
      </ul>
    </div>
  );
};

export default Resume;
