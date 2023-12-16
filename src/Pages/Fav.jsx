import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
function Fav() {
  useEffect(()=>{
    if(!localStorage.getItem('name')){
        window.open('/','_self')
 }
},[])

const [pd,setPrd]=useState([])


function getData(){
   axios.get('https://656dfc31bcc5618d3c245b4a.mockapi.io/Users')
   .then((res)=>{
      setPrd(res.data)
      console.log(pd)
   })
}

function del(id){
  axios.delete(`https://656dfc31bcc5618d3c245b4a.mockapi.io/Users/${id}`)
  .then(()=>{
      getData()
  })
}

useEffect(()=>{
 getData()
},[])

  const fav=pd.filter((e)=>e.myId==localStorage.getItem('id'))  
  
  return (
    <div>
      <div className='flex-col justify-center  items-center  w-screen h-full '>
        <div className='grid sm:grid-cols-3 gap-3'>
        {fav.map((items)=>(
        <div  key={items.id}>
             <div  class="relative  flex flex-col justify-end overflow-hidden rounded-2xl h-96 w-96 max-w-sm mx-auto mt-24">
           <img src={items.image} class="absolute inset-0 h-full w-full object-cover"/>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            </div>
         <button onClick={(()=>{del(items.id)})} className='float-right bg-amber-900 text-white p-2 m-5 rounded-xl '>Delete</button>
          </div>
       
        ))
        }
        </div>
       
    </div>
    </div>
  )
}

export default Fav