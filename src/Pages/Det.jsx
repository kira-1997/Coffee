import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
function Det() {
    useEffect(()=>{
        if(!localStorage.getItem('name')){
            window.open('/','_self')
     }
    },[])
    const [pd,setPrd]=useState('')
   const id=useParams()
   console.log(id.id)
    function getData(){
       axios.get(`https://api.sampleapis.com/coffee/hot/${id.id}`)
       .then((res)=>{
          setPrd(res.data)
          console.log(pd)
       })
   }
  useEffect(()=>{
     getData()
  },[])

  function cart(image){
    axios.post('https://656dfc31bcc5618d3c245b4a.mockapi.io/Users',{
        myId:localStorage.getItem('id'),
        image:image
    })
  }
   


  return (
<div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 font-bold">
 <div class="rounded overflow-hidden flex flex-col max-w-xl mx-auto ">
   <img class="w-full h-full" src={pd.image} alt="Sunset in the mountains"/>
    <div class="relative -mt-16 px-5 pt-5 pb-5 rounded-xl bg-black/60 m-10 shadow-xl">
        <a href="#"
            class="font-semibold text-lg text-white  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{pd.title}</a>
         <p class="text-white text-sm">
            {pd.description}
         </p>
         <p class="mt-5 text-white text-xs">
            By
            <a href="#" class="text-xs px-1 text-indigo-600 transition duration-500 ease-in-out">
                Areej
            </a> | in <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                Cooking
            </a>, <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                Recipe
            </a>
        </p>
        <button onClick={(()=>cart(pd.image))} className='float-right bg-amber-900 text-white p-1.5 rounded-full'>Add to Cart</button>
    </div>
 </div>
</div>
  )
}

export default Det