import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Register = () => {


    const [auth, setAuth] = useState({ name: "", email: "", password: "", cpassword: "" })
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        const { name, email, password } = auth;
        console.log(auth);
        e.preventDefault();

        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {

            localStorage.setItem('token', json.authtoken);
            navigate("/")

        }
        else {

            alert("invalid credential")
        }
    }

    const onChange = (e) => {
        setAuth({ ...auth, [e.target.name]: e.target.value })
    }



    return (
        <>

            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={onChange} name="name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Your name" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={onChange} name="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email" placeholder="Your email" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={onChange} name="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="password" placeholder="Your password" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Confirm Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={onChange} name="cnfrmpswd" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="password" placeholder="Your password" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ border: "2px solid black" }} >Create Account</button>

            </form>
        </>
    )
}

export default Register