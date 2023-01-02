import React from 'react';

function Account() {
  return (
    <div>

    <div className=' setting-header py-3 border-b border-slate-200'>

                <h1 className="text-2xl font-bold text-gray-800 mb-4">Account</h1>

            </div>
            <p className='py-4'>Fill the below form to update your account information</p>
    <form className="py-2">
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full px-3 mb-2">
        <input
          className="appearance-none block w-full b text-gray-700 border border-white-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Name"
        />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full px-3 mb-2">
        <input
          className="appearance-none block w-full b text-gray-700 border border-white-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="email"
          placeholder="Email"
        />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full px-3 mb-2">
        <input
          className="appearance-none block w-full b text-gray-700 border border-white-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="password"
          placeholder="Password"
        />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-2">
      <div className="w-full px-3 mb-2">
        <input
          className="appearance-none block w-full b text-gray-700 border border-white-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="file"
          placeholder="Profile Picture"
        />
      </div>
    </div>
    <div className="flex items-center justify-between">
      <button className="px-4 py-2 text-white bg-black rounded-full focus:outline-none focus:shadow-outline-blue">
        Update
      </button>
    </div>
  </form>
    </div>
  );
}

export default Account;
