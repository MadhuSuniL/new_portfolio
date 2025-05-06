import { generate_answer } from './Groq';
import './App.css';
import { useEffect, useState } from 'react';
import ChatHeader from './Components/ChatHeader';
import Chat from './Components/Chat';
import ChatFooter from './Components/ChatFooter';

export default function ChatBot() {
  const [prompt, setPrompt] = useState('')
  const [promptA, setPromptA] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState([welcome]);

  const scroll = () => {
    let ele = document.getElementById('chats')
    if (ele) {
      ele.scrollTop = ele.scrollHeight;
    }
  }


  const get_answer = (promptX = null) => {
    setIsLoading(true);
    setPromptA(prompt)
    setPrompt('');
    let final_prompt = promptX || prompt
    generate_answer(final_prompt).then(answer => {
      setIsLoading(false);
      let newChat = { prompt, answer }
      setChat(prev => ([...prev, newChat]));
    })
  };

  useEffect(() => {
    if (chat.length) {
      scroll();
    }
  }, [chat, isLoading]);

  return (
    <div className="w-full h-full shadow-2xl flex flex-col bg-gradient3">
      <ChatHeader isLoading={isLoading} setPrompt={setPrompt} />
      <div id='chats' className="flex-1 overflow-auto">
        <Chat chat={chat} prompt={promptA} isLoading={isLoading} />
      </div>
      <ChatFooter prompt={prompt} setPrompt={setPrompt} get_answer={get_answer} />
    </div>
  );
}



const welcomeText = `👋 Hi! I’m Bujji, virtual assistant of Madhu Bagamma Gari — an End-to-End Python & AI Engineer with 2.5+ years of experience.

Madhu has delivered 30+ projects for startups, specializing in Generative AI, Custom GPTs, Django, and React. He builds scalable, real-time apps with smart AI integrations.

Let me know if you'd like to explore his work or hire him for your next AI project! 🚀`


const welcome = {
  prompt: null,
  answer: welcomeText
}