import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
function Profile() {
  useEffect(()=>{
    if(!localStorage.getItem('name')){
        window.open('/','_self')
 }
},[])
const [img, setImg] = useState(false)
const [idEdit, setIdEdit] = useState(null);
const [name, setName] = useState({ })

function data(){
  axios.get(`https://656dfc31bcc5618d3c245b4a.mockapi.io/users/${localStorage.getItem('id')}`)
  .then((res)=>{
    setName(res.data)
     console.log(name.id)
  })
}
 
useEffect(()=>{
  data()
},[])

function update(){
  axios.put(`https://656dfc31bcc5618d3c245b4a.mockapi.io/users/${name.id}`,{
      name:name.name,
      email:name.email
  })
  setImg(false)
}

const save = (e)=>{
  setName({...name,
   [e.target.name]:e.target.value
  })}

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
         {img? 
          <div className='grid grid-cols-1 gap-5   bg-black p-10  '>
              <input className='rounded-xl border p-2'  onChange={save} name='name' value={name.name} style={{display: idEdit == name.id ? 'block' : 'none'}}/> 
              <input className='rounded-xl border p-2' onChange={save} name='email' value={name.email} style={{display: idEdit == name.id ? 'block' : 'none'}}/> 
              <button onClick={(()=>update())} className='bg-amber-900 rounded-xl p-1 text-white'>Update</button>
          </div>
           : 
           <div className='grid text-white grid-cols-1 gap-5 bg-black p-10 rounded-xl'>
            <p className='text-xl'>Name: {name.name}</p>
            <p className='text-xl'>Email: {name.email}</p>
            <button className='bg-amber-900 mt-4 rounded-xl p-1  text-white' onClick={() => {
               setImg(true)
               setIdEdit(name.id)
              } 
             }>Edit</button>
           </div>
        }
    </div>
  )
}

export default Profile