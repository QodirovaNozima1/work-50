import React from 'react'
import './Pick.css'
import img1 from '../../assets/pick1 (2).png'
import img2 from '../../assets/pick2 (2).png'
import img3 from '../../assets/pick3.png'
import img4 from '../../assets/pick4.png'

const Pick = () => {
    return (
        <div className='bg-[#FAFAFA] pt-16'>
            <div className="container flex items-center flex-col ">
                <h2 className='text-2xl font-bold'>EDITOR’S PICK</h2>
                <p className='mb-10'>Problems trying to resolve the conflict between </p>
                <div class="wrapper pb-26">
                    <div class="item"><img className='w-full' src={img1} alt="" /></div>
                    <div class="item"><img className='w-full' src={img2} alt="" /></div>
                    <div class="item"><img className='w-full' src={img3} alt="" /></div>
                    <div class="item"><img className='w-full' src={img4} alt="" /></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Pick