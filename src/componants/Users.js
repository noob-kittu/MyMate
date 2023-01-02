import React from 'react'
import { Link } from 'react-router-dom'
const users = [
  {
    id: 1,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
    name: "Ivan",
    lastMessage: "This is last message"
  },
  {
    id: 2,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
    name: "Arpita",
    lastMessage: "This is user last message"
  },
  {
    id: 3,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
    name: "John",
    lastMessage: "This is user last message"
  },
]

function Users() {
  
  return (
     <div className='all-users'>
       {/* Render a Link for each user */}
       {users.map(user => (
         <Link to={`/chats/${user.id}`} key={user.id}>
           <div className='chat-users flex align-baseline px-5 py-3 border-b border-slate-100'>
             <div className="shrink-0">
               <img className="h-12 w-12 object-cover rounded-full" src={user.avatar} alt="" />
             </div>
             <div className='px-4'>
               <h3>{user.name}</h3>
               <p className='text-xs text-slate-500'>{user.lastMessage}</p>
             </div>
           </div>
         </Link>
       ))}
     </div>
  )
}

export default Users
