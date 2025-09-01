import React from 'react';
import BackendDev from '../../assets/backend_dev2.png'
import FullStack from '../../assets/full_stack.png'
import AIEngineer from '../../assets/ai_engineer.png'
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";

const experiences = [
  {
    img: AIEngineer,
    title: "Full Stack Python & Generative AI Developer",
    company: "DTSkill",
    duration: "Sep 2024 - Present",
    location: "Remote",
    responsibilities: [
      "Developed and integrated Generative AI applications including agentic AI workflows, LLM assistants, and custom GPTs using LangChain and LangGraph.",
      "Built scalable REST APIs and backend systems with Django and Django REST Framework.",
      "Collaborated with frontend teams to deliver seamless full-stack applications using React.js.",
      "Mentored junior developers and contributed innovative ideas to enhance project workflows."
    ],
  },
  {
    img: FullStack,
    title: "Python Full Stack Developer",
    company: "TechFnatic Information Technology & Services",
    duration: "May 2023 - Sep 2024",
    location: "Bangalore, India",
    responsibilities: [
      "Created backend REST APIs with Django and Django REST Framework.",
      "Contributed to frontend development with React.js and Next.js, ensuring responsive UI/UX.",
      "Worked across full-stack tasks bridging backend logic and frontend features.",
      "Improved performance and collaborated closely with teams for project delivery."
    ],
  },
  {
    img: BackendDev,
    title: "Django Developer",
    company: "Simmi Foundation Organization",
    duration: "Oct 2022 - Jan 2023",
    location: "Remote",
    responsibilities: [
      "Developed backend services and domain-specific APIs using Django and Django REST Framework.",
      "Designed scalable user management systems and authentication flows.",
      "Provided efficient backend support for organizational projects with GitHub-based version control."
    ],
  },
];


const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // When at least 10% of the element is visible
  });
  const [isTyping, setIsTyping] = React.useState(true)
  return (
    <div id='experience' className="py-10">
      <div ref={ref} className="max-w-[1100px] mx-auto min-h-72 py-10 px-20">
        {
          inView &&
          <ReactTyped
            strings={[`
                  <h4 class="sub-heading">Professional</h4>
                  <h1 class="heading blue">
                    <span class="blue">Experience</span>
                  </h1>                  
                `]}
            typeSpeed={5}
            showCursor={false}
            onBegin={() => setIsTyping(true)}
            onComplete={() => setIsTyping(false)}
          />
        }
      </div>
      {
        !isTyping &&
        <div className="max-w-[1100px] mx-auto py-10 space-y-8 p-3">
          {experiences.map((experience, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-3 items-center bg-gradient-to-t from-sky-500 hover:via-transparent to-transparent shadow-lg shadow-sky-500 rounded-lg p-8 transition-transform transform hover:scale-[1.01]">
              <img src={experience.img} alt={experience.title} className="h-full w-full object-cover rounded-lg md:col-span-1" />
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-sky-500 underline underline-offset-8 mb-4" style={{ fontFamily: 'monospace' }}>{experience.title}</h2>
                <h3 className="text-xl font-medium text-gray-700">{experience.company}</h3>
                <p className="text-gray-600 mb-4">{experience.duration}, {experience.location}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="pl-2 text-sm">{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Experience;

