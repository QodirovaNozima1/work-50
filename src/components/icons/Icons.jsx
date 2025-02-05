import React from 'react'
import './Icons.css'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import icon6 from '../../assets/icon6.png'

const Icons = () => {
  return (
    <div className='flex gap-8 items-center justify-center mt-12 icon mb-12'>
        <img className='icon__img' src={icon1} alt="" />
        <img className='icon__img' src={icon2} alt="" />
        <img className='icon__img' src={icon3} alt="" />
        <img className='icon__img' src={icon4} alt="" />
        <img className='icon__img' src={icon5} alt="" />
        <img className='icon__img' src={icon6} alt="" />
    </div>
  )
}

export default Icons