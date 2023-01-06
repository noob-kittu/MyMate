// import axios from 'axios';
import { useState } from 'react'
import noteContext from './NoteContext'

const NoteState = (props) => {


  const [sucess, setSucess] = useState('')

  const Access = (token) => {
    // const value = JSON.stringify(token.success);

    setSucess(token.success);

  }


  return (
    <noteContext.Provider value={{ sucess, Access }} >
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState