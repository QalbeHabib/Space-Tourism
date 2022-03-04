import React from 'react'
import Navbar from '../Navbar/Navbar'
import image from './Images/Bitmap.png'

const Destination = () => {
  return (
      <div>
          <Navbar />
          <div className= ' w-2/4 text-white flex justify-cente p-10 '>
            <span className='mr-4 text-bolder text-xl'>01</span>
            <h1 className='text-3xl'>Pick Your Destination</h1>
          </div>
          <div className='  md:flex md:justify-center md:items-center lg:flex lg:justify-around lg:items-center  :mx-auto justify-center items-center  p-5 '>
              <div>
                  <img src={ image } alt="Moon is Here" />
              </div>
              <div >
                  <article>
                      <div className='text-white  0 space-y-5 p-4'>
                          <ul className='flex'>
                              <li><a href="">MOON</a></li>
                              <li><a href="">MARS</a></li>
                              <li><a href="">EUTOPA</a></li>
                              <li><a href="">TITAN</a></li>
                          </ul>
                          <h1 className=' text-9xl'>MOON</h1>
                          <p className='w-[472px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi qui molestias vitae corporis? Voluptates odit nisi reiciendis, voluptatum minus repellendus ipsa, provident sequi atque quo qui quam laboriosam placeat, magni excepturi?</p>
                          <hr />
                      <div className='flex '>
                          <div><span>AVG. DISTANCE</span><h3>213.213 KM</h3></div>
                          <div className=' ml-12'><span>AVG. TRAVEL TIME</span><h3>10 DAYS</h3></div>
                      </div>
                      </div>
                  </article>
              </div>
          </div>
    </div>
  )
}

export default Destination