import React from 'react'
import './Imp.css'
import { PiCompassRoseLight } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { FaCode } from "react-icons/fa";





const Imp = () => {
  return (
    <div className='main-parent flex-1 flex flex-col items-center my-3 '>

    <div className="block_1s pt-5  p-9 ">
      <h1 className='text-6xl font-semibold leading-normal'>
        <span>Hello, Dev.</span>
      </h1>
      <h1 className=' text-6xl font-semibold'>How can I help you today?</h1>
    </div>



      <div className="block_2s mt-3  ">
        <div className="card bg-zinc-800 rounded-lg flex flex-row justify-between gap-8 flex-wrap p-4">
          <p>Suggest beautiful places to see on an upcoming road trip</p>
          <PiCompassRoseLight className='inline-block text-white text-2xl ' />
        </div>

        <div className="card flex flex-row bg-zinc-800 rounded-lg justify-between gap-8 flex-wrap p-4">
          <p>Briefly summarize this concept: urban planning</p>
          <IoBulbOutline className='inline-block text-white text-2xl' />
        </div>

        <div className="card flex flex-row bg-zinc-800 rounded-lg justify-between gap-8 flex-wrap p-4">
          <p>Explain the concept of a user story in agile development</p>
          <CiChat1 className='inline-block text-white text-2xl' />
        </div>

        <div className="card flex flex-row bg-zinc-800 rounded-lg justify-between gap-12 flex-wrap p-4">
          <p>Tell me about react and react native</p>
          <FaCode className='inline-block text-white text-2xl' />
        </div> 
      </div>



      <div className="block_3s mt-20"> 

          <div className="messageBox">
            <input required="" placeholder="Enter a prompt here ..." type="text" id="messageInput" />
            <button id="sendButton">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 664 663">
                <path
                  fill="none"
                  d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                ></path>
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="33.67"
                  stroke="#6c6c6c"
                  d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                ></path>
              </svg>
            </button>
          </div>


      </div>

    </div>
  )
}

export default Imp