
import React from 'react';
import office from './assets/premium_photo-1661558817369-dbc33ce2fef3.jpg'
 import './App.css'

const Banner = () => {
  return (
    <>
    <div className='bannerImage'>
      <div className='col-md-6 mx-auto'>
            <h3 className='text-uppercase'>tech-teens</h3>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, dignissimos!</p>
      </div>
    </div>
    <div className='row my-3 py-3'>
        <div className='col-md-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta odio officiis, dolorum eius vitae at, cumque, deserunt modi impedit reiciendis quis consequatur maxime. Velit nostrum ipsum facilis architecto esse!
        </div>
        <div className='col-md-6 float-center'>
            <img src={office} alt="" width= "350"/>
        </div>
        
    </div>
    </>
  )
}

export default Banner
