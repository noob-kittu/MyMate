import React from 'react'
import { RiSendPlane2Line } from 'react-icons/ri';
import { MdOutlineAttachFile } from 'react-icons/md';
import { useState, useRef } from 'react';

function UserInput() {
  const [message, setMessage] = useState('');
  const textareaRef = useRef(null);

  function sendMessage() {
    if (message.trim() === '') {
      // prevent the message from being sent if it is empty
      return;
    }

    // send the message to a server or another component here
    setMessage('');
    textareaRef.current.value = '';
  }


  return (
    <div className='user-message-input-section w-[100%] bg-white py-2 fixed bottom-0 border border-slate-200 z-10'>
      <form className="flex items-center w-[72%] justify-between" onSubmit={event => {
        event.preventDefault();
        sendMessage();
      }}>
        <div className="flex items-center px-5 w-[100%]">
          <label htmlFor="file-input" className="text-gray-700 font-bold cursor-pointer">
            <MdOutlineAttachFile className='text-lg' />
          </label>
          <input className='w-0 hidden' type="file" id="file-input" />
          <textarea
            ref={textareaRef}
            className="placeholder:italic w-full h-11 max-h-20 placeholder:text-slate-400 bg-white border-0 border-slate-300 py-3 pl-2 shadow-sm focus:outline-none sm:text-sm resize-none"
            placeholder="Type your message here..."
            onChange={event => setMessage(event.target.value)}
            onKeyDown={event => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
              }
            }}
          >
          </textarea>

        </div>
        <div className='send-button'>
          <button type='submit' className="py-2  rounded-full" onClick={sendMessage}><RiSendPlane2Line className='text-lg' /></button>
        </div>
      </form>

    </div>
  )
}

export default UserInput