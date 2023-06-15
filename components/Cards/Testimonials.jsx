import React from 'react'

const Testimonials = ({clientReview, clientName}) => {
  return (
    <div className='w-[32%] bg-[#FAFAFA] flex flex-col justify-center text-center py-[60px] px-[35px] tablet:w-full'>
        <p className='text-grey-subtext mb-12'>"{clientReview}"</p>
        <div className='flex justify-end text-gold'><span>- {clientName}</span></div>
    </div>
  )
}

export default Testimonials