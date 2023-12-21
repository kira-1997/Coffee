import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
useNavigate
function Nav1() {
   
const navi=useNavigate()
    function out(){
        localStorage.clear()
       navi('/')
    }
    function toggleMenu() {
        const navToggle = document.getElementsByClassName("toggle");
        for (let i = 0; i < navToggle.length; i++) {
          navToggle.item(i).classList.toggle("hidden");
        }
      };
  return (
    <div>
    <nav className="flex font-bold  flex-wrap items-center justify-between py-2 px-2 bg-white shadow-xl">
    <img className='w-20' src="https://d1835ylud4heuo.cloudfront.net/assets/merchants/logo/11279823-C5F2-4CCF-1646851115593-logo.jpg" class="h-10 w-10" alt="ACME" width="120" />
    <div className="flex md:hidden">
        <button id="hamburger" onClick={(()=>{toggleMenu()})}>
          <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
        </button>
    </div>
    {localStorage.getItem('id')? 
    <div
        className="toggle items-center  justify-center hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
        <Link to="/"
            className="block md:inline-block text-indigo-800 hover:text-indigo-400 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home
        </Link>
        <Link to="/Products"
            className="block md:inline-block text-indigo-800 hover:text-indigo-400 px-3 py-3 border-b-2 border-blue-900 md:border-none">Products
        </Link>
        <Link to="/Profile"
            className="block md:inline-block text-indigo-800 hover:text-indigo-400 px-3 py-3 border-b-2 border-blue-900 md:border-none">Profile
        </Link>
        <Link to="/Cart"
            className="block md:inline-block text-indigo-800 hover:text-indigo-400 px-3 py-3 border-b-2 border-blue-900 md:border-none">Cart
        </Link>
        <button onClick={(()=>out())}
        className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-indigo-800 hover:bg-indigo-400 text-white md:rounded">Sign Out
    </button>
    </div>
     :
    <Link to="/SignIn"
        className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-indigo-800 hover:bg-indigo-400 text-white md:rounded">Sign In
    </Link>
}
</nav>
  
  
  </div>
  )
}

export default Nav1