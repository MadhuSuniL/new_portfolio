import React from 'react'
import Header from '../Components/Main/Header'
import Projects from '../Components/Main/Projects'
import '../assets/style.css'
import Stats from '../Components/Main/Stats'
import Experience from '../Components/Main/Experience'
import Education from '../Components/Main/Education'
import Skills from '../Components/Main/Skills'
import Services from '../Components/Main/Services'
import Footer from '../Components/Main/Footer'
import { FaRobot } from 'react-icons/fa';
import ChatBot from '../ChatBot'


const Main = () => {

  const [isChatBorOpen, setIsChatBotOpen] = React.useState(false)


  return (
    <div id='main' style={{ scrollBehavior: 'smooth' }} className='bg-[rgb(230,230,230)] h-dvh overflow-auto relative'>
      <div className='fixed bg-gradient2 h-screen w-screen' />
      <div className='absolute z-60 w-full'>
        <Header />
        <div className='bg-[rgb(230,230,230)] w-full absolute'>
          <Projects />
          <Experience />
          <Education />
          <Skills />
          <Services />
          <Stats />
          <Footer />
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-[999]">
        <button
          onClick={() => setIsChatBotOpen(!isChatBorOpen)}
          className="bg-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all animate-pulse" 
          aria-label="ChatBot"
        >
          <FaRobot className="text-xl" />
        </button>
      </div>
      {isChatBorOpen && (
        <div className="fixed bottom-20 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl z-[1000] overflow-hidden border border-gray-300">
          <ChatBot />
        </div>
      )}
    </div>
  )
}

export default Main


