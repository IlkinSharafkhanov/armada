import React from 'react'

const ColoredCards = ({numberOfProducts, productType, imgSrc}) => {
  return (
    <div style={{backgroundImage: `url(${imgSrc})`}} className='w-[48%] flex flex-col-reverse bg-cover bg-no-repeat bg-center h-64 tablet:w-full duration-300 hover:pb-7'>
        <div className='m-3 p-5'>
            <span className='text-grey-p font-modern text-sm'>{numberOfProducts}</span>
            <p className='text-grey-p text-2xl font-bold'>{productType}</p>
        </div>
    </div>
  )
}

export default ColoredCards