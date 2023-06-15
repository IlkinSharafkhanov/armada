import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const WorkerCards = ({cardImg, workerName, workerPosition}) => {
  return (
    <div className='flex flex-col justify-center w-[32%] tablet:w-full'>
        <img src={cardImg} alt="worker" />
        <div className='flex flex-col justify-center items-center text-center'>
            <h3 className='text-xl font-semibold my-3'>{workerName}</h3>
            <p className='mb-6 text-grey-hover font-modern font-extralight tablet:mb-3'>{workerPosition}</p>
        </div>
        <div className='flex gap-x-2 justify-center'>
            <div className='w-[40px] h-[40px] border-black border-[0.6px] border-opacity-20 p-3'><FaFacebookF className='text-gold'/></div>
            <div className='w-[40px] h-[40px] border-black border-[0.6px] border-opacity-20 p-3'><AiFillInstagram className='text-gold'/></div>
            <div className='w-[40px] h-[40px] border-black border-[0.6px] border-opacity-20 p-3'><FaLinkedinIn className='text-gold'/></div>
        </div>
    </div>
  )
}

export default WorkerCards