import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {singupInput} from "./../../../../common/src/index"

function Signup() {
  const navigate = useNavigate()
  const [name,setName] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  async function submit(){
    const data:singupInput = {
      username : username,
      password : password,
      name : name
    }
    const response = await axios.post("http://localhost:8787/api/v1/user/signup",data)
    console.log(response);
  }

  return (
    <div className="flex flex-col  w-auto p-6 ">
      <h1 className="text-center font-bold text-3xl">Create an account</h1>
      <h1 className="text-center text-slate-600">Already have an account? <span className="cursor-pointer" onClick={()=>{navigate("/signin")}}>Login</span></h1>
      <br />
      <h1 className="">Username</h1>
      <input 
      type="text"
      placeholder="Enter your username" 
      className="outline-none border p-1 border-slate-300 rounded-md"
      value={name}
      onChange={(e)=>{setName(e.target.value)}}/>
      <h1 className="mt-1">Email</h1>
      <input 
      type="text"
      placeholder="m@example.com" 
      className="outline-none border p-1 border-slate-300 rounded-md"
      value={username}
      onChange={(e)=>{setUsername(e.target.value)}}/>
      <h1 className="mt-1">Password</h1>
      <input 
      type="password"
      placeholder="Password" 
      className="outline-none border p-1 border-slate-300 rounded-md"
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}/>
      <br />
      <button type="button" className="bg-black text-white font-semibold pt-1 pb-1 rounded-md" onClick={()=>{submit()}}>Sign Up</button>
    </div>
  )
}

export default Signup