import React, { useState, useContext } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link, useNavigate } from 'react-router-dom';
import noteContext from '../Context/Notes/NoteContext';

// For checking login token


function Login() {

    const context = useContext(noteContext);
    const { Access } = context;

    let navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ email: credential.email, password: credential.password })

        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);

            Access(json);
            navigate("/")

        }

    }
    const [credential, setcredential] = useState({ email: "", password: "" })

    console.log(credential);

    const onChange = (e) => {

        setcredential({ ...credential, [e.target.name]: e.target.value })
    }












    return (
        <div className="container flex w-10/12 m-auto mt-10 bg-white drop-shadow-md rounded-sm border border-slate-200">
            <div className='left-login-page flex flex-wrap align-middle content-center w-[30%] h-full px-5 border-r border-slate-200'>
                <h2 className='text-lg'>Welcome to <br /><b className='text-4xl'>MyMate</b></h2>
                <p className='text-xs text-slate-700 py-2'>Connect with like-minded people and build meaningful relationships on MyMate, the social media app for making friends.</p>

                <form className="w-full max-w-xs py-5" onSubmit={handleSubmit}>
                    <div className="md:flex md:items-center mb-6">
                        <input
                            className="appearance-none border border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                            id="inline-full-name"
                            type="email"
                            placeholder='Enter Your Email'
                            value={credential.email}
                            onChange={onChange}
                            name="email"
                        />
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <input
                            className=" appearance-none border border-slate-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                            id="inline-username"
                            type="password"
                            name="password"
                            placeholder='Enter Your Password'
                            value={credential.password}
                            onChange={onChange}
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
