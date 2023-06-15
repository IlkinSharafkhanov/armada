import { useRouter } from 'next/router'
import React from 'react'

const Products = ({divWidth, picHeight, productImg, productName, productPrice}) => {
    const router = useRouter()
  return (
    // style={{width: `${divWidth}%`}} 
    <div className={`${divWidth} ${router.pathname==='/products'?'bigger-desktop:w-[31%]':console.log()} laptop:w-[48%] phone:w-[100%] flex flex-col justify-center items-center`}>
        <div style={{backgroundImage: `url(${productImg})`, height:`${picHeight}px`}} className="mb-3 w-full bg-cover bg-no-repeat bg-center"></div>
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h3 className='text-lg'>{productName}</h3>
            </div>
            <div>
                <span className='font-modern text-baseline'>${productPrice}.00</span>
            </div>
        </div>
        <div>
            <button className='py-2 px-6 bg-button-gold mt-12 text-white font-modern text-sm duration-300 hover:bg-button-hover'>Add to cart</button>
        </div>
    </div>
  )
}

export default Products