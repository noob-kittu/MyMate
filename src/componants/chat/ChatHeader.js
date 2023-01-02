import React from 'react'

function ChatHeader() {
    return (
        <div className='user-info-section flex justify-between align-middle px-5 py-2 border-b border-slate-200'>
            <div className='user-profile flex'>
                <div className="shrink-0">
                    <img className="h-10 w-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="" />
                </div>
                <div className='users-name-status-section pl-4'>
                    <h2>Ivan</h2>
                    <p className='text-xs'>last seen 5 days ago</p>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader