import React from 'react'

function Singup() {


  // For registering a user 

  const handleSubmit = async(e) => {

    const {name,email,password}=auth;
    e.preventDefault();
  
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
      },
      body:JSON.stringify({name,email,password})    
    });
    const json=await response.json();

    // in response we get the token from the api

    console.log(json);
    if(json.success){
  
      //  this will set token in localstorage to acess other pages with authentication 
      localStorage.setItem('token',json.authtoken);
      showAlert("Account Created successfully","success")
      navigate("/")
  
    }
    else{
      
      alert("invalid credential")
    }
  }
  
    const onChange=(e)=>{
  setAuth({...auth,[e.target.name]:e.target.value})
  }
  























  return (
    <div>Singup</div>
  )
}

export default Singup