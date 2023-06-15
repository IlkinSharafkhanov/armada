import React, { useState } from "react";

const MessageToCompany = () => {
  async function handleSubmit(e){
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
        if(!field.name) return;
        formData[field.name] = field.value
    })
    fetch('/pages/api/message.js',{
        method: 'post',
        body: JSON.stringify(formData)
    })
    console.log(formData);
  }

  return (
    <div className="px-16 pt-12 pb-16 shadow-xl bg-white">
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="text-3xl font-semibold mb-9">Send us a message</h2>
        </div>
        <div className="w-full">
          <label htmlFor="name"></label>  
          <input
            className="w-full border-black border-[0.6px] border-opacity-20 p-3 font-modern my-[10px]"
            type="text"
            placeholder="Name *"
            name="name"
            id=""
          />
          <label htmlFor="email"></label>
          <input
            className="w-full border-black border-[0.6px] border-opacity-20 p-3 font-modern my-[10px]"
            type="email"
            placeholder="Email Address *"
            name="email"
            id=""
          />
          <label htmlFor="subject"></label>
          <input
            className="w-full border-black border-[0.6px] border-opacity-20 p-3 font-modern my-[10px]"
            type="text"
            placeholder="Subject"
            name=""
            id=""
          />
          <label htmlFor="message"></label>
          <textarea
            className="w-full border-black border-[0.6px] border-opacity-20 p-3 font-modern my-[10px] pb-20"
            type="text"
            placeholder="Comment or Message *"
            name="message"
            id=""
          />
        </div>
        <div>
          <button
            type="submit"
            className="py-[5px] px-9 mt-12 text-white bg-button-gold font-modern duration-300 hover:bg-button-hover"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageToCompany;
