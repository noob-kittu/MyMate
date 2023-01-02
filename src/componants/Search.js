import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'


function Search() {
    return (
        <div className='search-section pl-2'>
            <label className="relative block w-full">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <IoSearchOutline className="h-5 w-5 fill-slate-300" />
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border-0 border-slate-300 py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
            </label>
        </div>
    )
}

export default Search