import React from 'react'
import './Information.css'
import family from '../../assets/infor.png'

const Information = () => {
  return (
    <div className='mb-32'>
    <div className='container flex mt-12 information items-center justify-center'>
        <div className="w-[50%] infor__img">
            <img  className="w-full" src={family} alt="" />
        </div>
        <div className="flex infor__text flex-col items-start justify-center gap-12 w-[30%]">
            <p className='font-bold text-[#BDBDBD]'>SUMMER 2020</p>
            <h2 className='font-bold text-[40px]'>Part of the Neural 
            Universe</h2>
            <p className='text-[#BDBDBD] font-bold'>We know how large objects will act, 
            but things on a small scale.</p>
            <div className="buttons flex gap-1.5">
                <button className='w-[171px] text-[14px] font-bold h-[52px] bg-[#2DC071] text-white rounded-lg hover:bg-green-600 focus:outline-offset-2 focus:outline-green-500 active:bg-green-700'>BUY NOW</button>
                <button className='w-[171px] text-[14px] font-bold h-[52px] bg-white text-[#2DC071] rounded-lg  border-b-emerald-400 hover:bg-emerald-100'>READ MORE</button>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Information