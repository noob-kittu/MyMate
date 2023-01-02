import React from 'react'
import {BsGear} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-section flex justify-between align-middle h-18 px-7 py-3 border-b border-slate-200'>
        <div className='logo'>
          <h2 className='logo-name'>MyMate</h2>
        </div>
        <div className='account flex align-middle justify-between'>
        <div className="shrink-0">
                <img className="h-6 w-6 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt=''  />
            </div>
          <h3 className='px-3 text-[17px]'>kittu</h3>
          <Link to="/settings">
          <BsGear className='text-lg ml-5 mt-[4px] cursor-pointer'/>
          </Link>
        </div>
      </div>
  )
}

export default Header