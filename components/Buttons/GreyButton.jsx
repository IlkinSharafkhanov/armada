import React from 'react'
import {BsArrowRight} from "react-icons/bs"

const GreyButton = ({buttonText}) => {
  return (
    <button className="flex justify-center items-center gap-x-2 px-6 py-3 bg-white-web font-modern">{buttonText} <BsArrowRight/></button>
  )
}

export default GreyButton