import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
useNavigate
import { Link } from 'react-router-dom'
function SignIn() {
    const navigate=useNavigate()
const [user,setU]=useState({
    name:'',
    pass:''
})

const [dta,setD]=useState([])
const handle=((e)=>{
    setU({...user,
      [e.target.name]:e.target.value
    })
})


  axios.get('https://656dfc31bcc5618d3c245b4a.mockapi.io/users')
  .then(res=>{
    setD(res.data)
  })
  .catch(function(err){
    console.log(err)
   })
   const validate=dta.find((u)=>
   u.name===user.name
  )
 
  



function go(){
    if(validate){
        localStorage.setItem('id',validate.id)
        localStorage.setItem('name',validate.name)
        navigate('/Products')
    }
  
}


  return (
    <div className='bg-amber-900 h-screen w-screen'>
    <div className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div className="hidden lg:block lg:w-1/2 bg-cover bg-[url('https://w0.peakpx.com/wallpaper/930/817/HD-wallpaper-pretty-anime-girls-cafe-friends-slice-of-life-anime.jpg')]">
            </div>
            <div className="w-full p-8 lg:w-1/2">
                <p className="text-xl text-indigo-800  font-bold text-center">Welcome back!</p>
                <div className="mt-4">
                    <label className="block text-indigo-800  text-sm font-bold mb-2">Name:</label>
                    <input onChange={handle} name='name' className="bg-gray-200 text-indigo-800  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                </div>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <label className="block text-indigo-800  text-sm font-bold mb-2">Password:</label>
                    </div>
                    <input onChange={handle} name='pass' className="bg-gray-200 text-indigo-800 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                </div>
                <div className="mt-8">
                    <button onClick={go} className="bg-indigo-800 text-white font-bold py-2 px-4 w-full rounded hover:bg-indigo-400">Login</button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="border-b w-1/5 md:w-1/4"></span>
                    <Link to="/SignUp" className="text-xs hover:text-indigo-400 text-indigo-800  uppercase">or Sign up</Link>
                    <span className="border-b w-1/5 md:w-1/4"></span>
                </div>
            </div>
        </div>
    </div>
        </div>
  )
}

export default SignIn