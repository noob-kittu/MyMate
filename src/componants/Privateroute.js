import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import noteContext from '../Context/Notes/NoteContext'

const Privateroute = () => {

    const context = useContext(noteContext);
    const { sucess } = context;
    let auth = { 'token': sucess }
    return (
        auth.token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default Privateroute