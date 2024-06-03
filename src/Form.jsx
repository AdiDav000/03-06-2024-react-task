import React, { useState } from 'react'
import './Form.css'
const Form = () => {
    const [changed, setChanged]=useState(false);
    const [user, setUser]=useState({
        name:"",
        age:"",
        email:"",
        number:"",
        address:{
            city:"",
            state:"",
            country:"",
        }
    });
    const handleChange = (e)=>{
        setChanged(false);
        const {name,value}=e.target;
        if(name in user){
            setUser({...user,[name]:value });
        }else{
            setUser({...user, address:{...user.address,[name]:value}});
        }
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        if(user.name==""){
            alert("name is empty");
        }
        if(user.age==""){
            alert("age is empty");
        }
        if(user.email==""){
            alert("email is empty");
        }
        if(user.number==""){
            alert("number is empty");
        }
        if(user.address.city=="" || user.address.state=="" || user.address.country==""){
            alert("address is empty");
        }else{
            console.log(user);
            setChanged(true);
        }
    }
  return (
    <div>
    <form onSubmit={formSubmit}>
      <input type='text' name='name' placeholder='name' onChange={handleChange} value={user.name}></input>
      <input type='text' name='age' placeholder='age' onChange={handleChange} value={user.age}></input>
      <input type='email' name='email' placeholder='email' onChange={handleChange} value={user.email}></input>
      <input type='number' name='number' placeholder='number' onChange={handleChange} value={user.number}></input>
      <input type='text' name='city' placeholder='city' onChange={handleChange} value={user.address.city}></input>
      <input type='text' name='state' placeholder='state' onChange={handleChange} value={user.address.state}></input>
      <input type='text' name='country' placeholder='country' onChange={handleChange} value={user.address.country}></input>
      <button type='submit'>Submit</button>
    </form>
    <p>{changed? user.name+" - "+user.age+" - "+user.email+" - "+user.number+" - "+user.address.city:""}</p>
    </div>
  )
}

export default Form
