import React from 'react'
import Prompt from './Prompt'
import Answer from './Answer'
import Resume from './Resume'

const Chat = ({
    chat,
    prompt,
    isLoading
}) => {
    return (
        <div className='p-1 h-full'>
            {
                chat.map((c, index) =>
                    <div key={index}>
                        {
                            c.prompt &&
                            <Prompt text={c.prompt} />
                        }
                        <Answer text={c.answer} />
                    </div>
                )
            }
            {
                chat.length === 0 && !isLoading &&
                <Resume />
            }
            {
                isLoading &&
                <Prompt text={prompt} />
            }
            <span id='chat-end'></span>
        </div>
    )
}

export default Chat