import React from 'react';
import { Link } from 'react-router-dom';
import ChangeTheme from '../componants/settings/ChangeTheme';
import { useLocation, useNavigate } from 'react-router-dom';
import Account from '../componants/settings/Account';
import Security from '../componants/settings/Security';
import DefaultComponent from '../componants/settings/DefaultComponent';

function Settings() {
    const location = useLocation();
    const navigate = useNavigate();



    return (
        <div className='container flex w-10/12 m-auto mt-10 bg-white drop-shadow-md rounded-sm'>

            <div className="w-full lg:w-[25%] p-4 lg:p-8 border-r border-slate-200">
                <div className='setting-left-header'>
                    <h1 className='text-2xl font-bold my-3'>Settings</h1>

                </div>
                <div className=''>
                    <Link to="/settings/account" className="block p-2 py-3 border-b border-slate-200 active:bg-gray-100">Account</Link>
                    <Link to="/settings/security" className="block p-2 py-3 border-b border-slate-200 active:bg-gray-100">Security</Link>
                    <Link to="/settings/theme" className="block p-2 py-3 border-b border-slate-200 active:bg-gray-100">Change Theme</Link>
                    <Link to="/login" className="block p-2 py-3 border-b border-slate-200 active:bg-gray-100">
                        <button>Logout </button>
                    </Link>
                </div>
            </div>
            <div className="w-full lg:w-[75%] p-4 lg:p-8">
                <div className='cancal-button fixed border rounded-full py-1 px-3  text-lg border-black right-5 z-10 font'>

                    <button onClick={() => navigate('/')}>
                       X
                    </button>
                </div>

                
                {location.pathname === '/settings/theme' && <ChangeTheme />}
                {location.pathname === '/settings/account' && <Account />}
                {location.pathname === '/settings/security' && <Security />}
                {location.pathname === '/settings' && <DefaultComponent />}
            </div>

            

        </div >
    );
}

export default Settings
