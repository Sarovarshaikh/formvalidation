import React from 'react'
import './App.css'
import p1 from './assets/technology.png'
import p2 from './assets/transparent.png'
import p3 from './assets/data-management.png'
import p4 from './assets/project-management.png'
import p5 from './assets/virtual.png'

const Rubycard = () => {
  return (
    <div className="container mt-5">
    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <div className="col">
        <div className="">
            <div className="card mainCardTop">
            <h5 class="card-title p-3 bg-info cardSubtop"><h5 className="bg-white rounded-circle w-10 h-10 text-center p-3" style={{width:"30px", height:"30px"}}>1</h5></h5>
            <img src={p1} class="card-img-top" alt="..."/>
                <div className="card-body">

                </div>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="">
            <div className="card mainCardTop">
            <h5 class="card-title p-3 bg-info cardSubtop"><h5 className="bg-white rounded-circle w-10 h-10 text-center p-3" style={{width:"30px", height:"30px"}}>1</h5></h5>
            <img src={p2} class="card-img-top" alt="..."/>
                <div className="card-body">

                </div>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="">
            <div className="card mainCardTop">
            <h5 class="card-title p-3 bg-info cardSubtop"><h5 className="bg-white rounded-circle w-10 h-10 text-center p-3" style={{width:"30px", height:"30px"}}>1</h5></h5>
            <img src={p3} class="card-img-top" alt="..."/>
                <div className="card-body">

                </div>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="">
            <div className="card mainCardTop">
            <h5 class="card-title p-3 bg-info cardSubtop"><h5 className="bg-white rounded-circle w-10 h-10 text-center p-3" style={{width:"30px", height:"30px"}}>1</h5></h5>
            <img src={p4} class="card-img-top" alt="..."/>
                <div className="card-body">

                </div>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="">
            <div className="card mainCardTop">
            <h5 class="card-title p-3 bg-info cardSubtop"><h5 className="bg-white rounded-circle w-10 h-10 text-center p-3" style={{width:"30px", height:"30px"}}>1</h5></h5>
            <img src={p5} class="card-img-top" alt="..."/>
                <div className="card-body">

                </div>
            </div>
        </div>
      </div>
    
    
     
    </div>
  </div>
  )
}

export default Rubycard
