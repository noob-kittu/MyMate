import React from 'react';

function Security() {
  return (
    <div>
<div className=' setting-header py-3 border-b border-slate-200'>

<h1 className="text-2xl font-bold text-gray-800 mb-4">Security</h1>

</div>        <form>
          <div className="py-3">
            <div className="w-full md:w-1/2 px-3 py-2">
              <label className="block tracking-wide text-gray-700 my-2" htmlFor="grid-first-name">
                Who can see my profile picture?
              </label>
              <div className="relative rounded-md shadow-sm">
                <select className="form-input focus:outline-none py-2 px-3 block w-full leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="grid-first-name">
                  <option>Everyone</option>
                  <option>Only me</option>
                  <option>My connections</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 py-2">
              <label className="block tracking-wide text-gray-700 my-2" htmlFor="grid-last-name">
                Who can see my email?
              </label>
              <div className="relative rounded-md shadow-sm">
                <select className="form-input focus:outline-none py-2 px-3 block w-full leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5" id="grid-last-name">
                  <option>Everyone</option>
                  <option>Only me</option>
                  <option>My connections</option>
                </select>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 my-4 text-white bg-black rounded-full focus:outline-none focus:shadow-outline-blue">
            Save Changes
          </button>
        </form>
        </div>
     
)
};

export default Security