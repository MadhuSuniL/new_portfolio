import React from 'react'
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";
import ChatBot from '../../ChatBot';


const Chats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // When at least 10% of the element is visible
  });
  const [isTyping, setIsTyping] = React.useState(true)
  const scrollToChat = () => {
    let ele = document.getElementById('come')
    if (ele) {
      setTimeout(() => {
        ele.scrollIntoView({ behavior: "smooth" });
      }, 1200)
    }
  }


  return (
    <div id='chat' className='bg-[rgb(255,255,255)] max-w-[1100px] mx-auto shadow-2xl shadow-gray-400'>
      <ChatBot />
    </div>
  )
}

export default Chats