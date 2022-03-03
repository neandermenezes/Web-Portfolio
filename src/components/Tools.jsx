import React from 'react'
import FrontToolsCard from './FrontToolsCard'

export default function Tools() {
  return (
    <div id='tools' className='tools-section'>
      <div data-aos="fade-up" className='tools'>
      <div className='tools__textbox'>
        <h4 className='tools__header'>Bora programar</h4>
        <p className='tools__sub'>Algumas ferramentas que domino</p>
      </div>
      
      <div data-aos="fade-up" className='tools__front'>
        <p className='tools__type'>Front-end</p>
        <FrontToolsCard />
      </div>
      </div>
    </div>
  )
}
