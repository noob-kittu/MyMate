import React from 'react'

function LocalUser({ message }) {
  return (
    <div className='local-user-messages my-3'>
      <div className=' flex align-middle justify-end'>
        <div className='message-container'>
          <p className="bg-blue-200 py-2 px-5 rounded-md w-xs max-w-xs text-xs">
            {message.message}
          </p>
        </div>
        <div className="shrink-0 px-2">
          <img className="h-10 w-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt='' />
        </div>
      </div>
    </div>
  )
}


export default LocalUser