import React from 'react'
 import './App.css'
const Navbar = () => {
  return (
    <div className='poistion-relative'>
        <div className='minNav d-flex justify-content-between px-5 align-items-center'>
            <div className='logB w-25'>
                <a href="">
                <img src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" alt="Rubixe Logo"className='w-50' />
                    
                </a>
            </div>
            <ul className='d-flex justify-content-center align-items-center list_item'>
                <li className=''> <a href="">Home</a> </li>
                <li> <a href="">About</a> </li>
                <li> <a href="">Service</a> </li>
                <li> <a href=''>Contact US</a> </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;

