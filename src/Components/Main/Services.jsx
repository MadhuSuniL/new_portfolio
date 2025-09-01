import React from 'react';
import { FaServer, FaRobot, FaCode, FaBrain } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { TbApi } from 'react-icons/tb';
import { ReactTyped } from "react-typed";
import { useInView } from 'react-intersection-observer';

const services = [
    {
        title: 'Backend Development',
        description: 'Develop and optimize scalable backend systems using Python, Django, and DRF. Implement WebSocket support with Django Channels for real-time communication and data handling.',
        icon: <FaServer size={30} />,
    },
    {
        title: 'Frontend Integration',
        description: 'Build responsive and user-friendly interfaces with React, Next.js, Tailwind CSS, and Bootstrap for seamless client-side experiences.',
        icon: <FaCode size={35} />,
    },
    {
        title: 'Custom AI Solutions',
        description: 'Design, train, and deploy tailored AI models including NLP, computer vision, and machine learning pipelines to solve complex business challenges.',
        icon: <GiArtificialIntelligence />,
    },
    {
        title: 'Generative AI Applications',
        description: 'Create advanced generative AI systems such as AI Agents, Custom GPTs, and ChatGPT-like conversational platforms adapted to business needs.',
        icon: <FaRobot />,
    },
    {
        title: 'REST API Development',
        description: 'Develop secure and efficient RESTful APIs with Django REST Framework, including authentication mechanisms like JWT and token-based systems.',
        icon: <TbApi size={40} />,
    },
    {
        title: 'AI-Powered Applications',
        description: 'Integrate AI models into production-ready applications such as recommendation systems, intelligent chatbots, fraud detection systems, and document summarizers.',
        icon: <FaBrain />,
    }
];


const Services = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    const [isTyping, setIsTyping] = React.useState(true);

    return (
        <div id="services" className="py-10">
            <div ref={ref} className="max-w-[1100px] mx-auto min-h-72 py-10 px-6 md:px-20">
                {
                    inView &&
                    <ReactTyped
                        strings={[`
                <h4 class="sub-heading">What I Offer</h4>
                <h1 class="heading text-green-500">
                  <span class="text-green-500">Services</span>
                </h1>
              `]}
                        typeSpeed={10}
                        showCursor={false}
                        onBegin={() => setIsTyping(true)}
                        onComplete={() => setIsTyping(false)}
                    />
                }
            </div>

            {
                !isTyping && inView &&
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg shadow-green-300 rounded-xl p-6 transform transition-transform hover:scale-[1.05]">
                            <div className="text-4xl green mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default Services;

