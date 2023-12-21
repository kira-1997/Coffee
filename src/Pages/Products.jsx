import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Products() {
    useEffect(()=>{
        if(!localStorage.getItem('name')){
            window.open('/','_self')
     }
    },[])
   
     const [pd,setPrd]=useState([])
     const [input,setInput]=useState('')


     function getData(){
        axios.get('https://api.sampleapis.com/coffee/hot')
        .then((res)=>{
           setPrd(res.data)
           console.log(pd)
        })
    }
   useEffect(()=>{
      getData()
   },[])
   
   let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInput(lowerCase);
  };
  
    const Filtered=pd.filter((e)=>{
      if(input===''){
        return e 
      }
      else{
        return e.title.toLowerCase().includes(input)
      }
    })
     


  return (
    <div className='flex-col justify-center  items-center  w-screen h-full '>
        
        <input type="text" placeholder='Search' onChange={inputHandler} className='w-1/2 border h-8 mx-72 mt-10 p-5  rounded-xl focus:ring-amber-900'  />

        <div className='grid sm:grid-cols-3 gap-3'>
        {Filtered.map((items)=>(
        <div key={items.id}  class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl h-96 w-96 max-w-sm mx-auto mt-24">
          <Link to={`/Details/${items.id}`}> <img src={items.image} class="absolute inset-0 h-full w-full object-cover"/>
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 class="z-10 m-5 text-3xl font-bold  text-white">{items.title}</h3></Link>
        </div>
        ))
        }
        </div>
       
    </div>
  )
}

export default Products