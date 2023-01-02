import React from 'react'
import Users from '../componants/Users';
import Search from '../componants/Search';
import Header from '../componants/Header';
import Chats from '../componants/Chats';
import { useLocation, useParams } from 'react-router-dom';

function Home() {
  const location = useLocation()
  const { userId } = useParams();

  return (
    <div className='container w-10/12 m-auto mt-10 bg-white drop-shadow-md rounded-sm border border-slate-200'>
      <Header/>
      <div className='main-container flex'>
        <div className='left-section border-r w-[25%] border-slate-200'>
          <Search/>
          <Users/>
        </div>
        <div className='right-section w-[74%]'>
          {location.pathname === `/chats/${userId}` && <Chats userId={userId} />}
        </div>
      </div>
    </div>
  )
}

export default Home