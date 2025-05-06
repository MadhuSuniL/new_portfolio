import React from 'react'
import BotImg from '../assets/bot.png'
import ReactMarkdown from 'react-markdown';

const Answer = ({ text }) => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full border-purple-600 border p-[2px]">
          <img alt="Madhu" src={BotImg} className='rounded-full' />
        </div>
      </div>
      <div className="chat-header text-black font-semibold">
        Bujji
      </div>
      <div className="chat-bubble bg-gray-100  text-gray-700"><ReactMarkdown>{text}</ReactMarkdown></div>
    </div>
  )
}

export default Answer