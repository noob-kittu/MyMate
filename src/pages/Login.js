import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link, useNavigate } from 'react-router-dom';


const users = [
    {
        id: 1,
        email: 'user@example.com',
        password: 'password123',
        name: 'John Doe'
    },
    {
        id: 2,
        email: 'jane@example.com',
        password: 'abcdef',
        name: 'Jane Smith'
    }
];

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()



    const handleSubmit = (event) => {
        event.preventDefault();

        // Find the user in the users array
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            navigate('/');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="container flex w-10/12 m-auto mt-10 bg-white drop-shadow-md rounded-sm border border-slate-200">
            <div className='left-login-page flex flex-wrap align-middle content-center w-[30%] h-full px-5 border-r border-slate-200'>
                <h2 className='text-lg'>Welcome to <br /><b className='text-4xl'>MyMate</b></h2>
                <p className='text-xs text-slate-700 py-2'>Connect with like-minded people and build meaningful relationships on MyMate, the social media app for making friends.</p>
                {error && <p className="text-red-500">{error}</p>}
                <form className="w-full max-w-xs py-5" onSubmit={handleSubmit}>
                    <div className="md:flex md:items-center mb-6">
                        <input
                            className="appearance-none border border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                            id="inline-full-name"
                            type="email"
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <input
                            className=" appearance-none border border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                            id="inline-username"
                            type="password"
                            placeholder='Enter Your Password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />

                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-3/3">
                            <button className="shadow bg-gray-900 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded" type="button" onClick={handleSubmit}>
                                Sign In
                            </button>
                        </div>
                        <div className="md:w-2/3 ml-2 pl-3">
                            <Link to="/register">New User?</Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className=' w-[70%] flex flex-wrap align-middle justify-center content-center h-full bg-slate-100'>
                <Player
                    autoplay
                    loop
                    src="https://assets10.lottiefiles.com/packages/lf20_nc1bp7st.json"
                    style={{ height: '400px', width: '400px' }}
                >
                </Player>
            </div>
        </div>




    );
};

export default Login;
