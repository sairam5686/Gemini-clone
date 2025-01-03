import React, { useContext } from 'react'
import './Imp.css'
import { PiCompassRoseLight } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { CiChat1 } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { Geminicontext } from '../../context/Api';



const Imp = () => {

  const {Request, setRequest, response, setResponse,Skeleton, Pressed, setPressed, prompt_logic} = useContext(Geminicontext);


  return (

   

      
 <div className='main-parent flex-1 flex flex-col items-center my-3 '>

  {
    Pressed ? <>
  
      <div className="block_3s mt-5"> 

          <div className="messageBox">
            <input  placeholder="Enter a prompt here ..." value={Request} onChange={(e)=>{setRequest(e.target.value); }}  type="text" id="messageInput" />
            <button id="sendButton" onClick={()=>{
              setPressed(true);
              prompt_logic(Request);
            }}>
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

      <div className="block_4s">
        {Skeleton ?
        <>
        <div className='mt-20 flex flex-col gap-6'>
                <div class="flex items-center w-full ">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
                <div class="flex items-center w-full ">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div class="flex items-center w-full ">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div class="flex items-center w-full ">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div class="flex items-center w-full ">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div class="flex items-center w-full ">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-3/4"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-3/4"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
                <div class="flex items-center w-full ">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div class="flex items-center w-full ">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <div class="flex items-center w-full ">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                </div>
                <div class="flex items-center w-full ">
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                    <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
                <span class="sr-only">Loading...</span>
                </div>
          
      
        </> 
        : 
        <>
        <div className='result'>
         <div className='resultbox'>
          <p dangerouslySetInnerHTML={{__html:response}}></p>
        </div>
        </div>
        
        </>
        
        }
       

      </div>
    </>
    
    
    :
    
    
    <>
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



      <div className="block_3s mt-20 mb-10"> 

          <div className="messageBox">
            <input  placeholder="Enter a prompt here ..." value={Request} onChange={(e)=>{setRequest(e.target.value); }}  type="text" id="messageInput" />
            <button id="sendButton" onClick={()=>{
              setPressed(true);
              prompt_logic(Request);
            }}>
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
    </> 
  }
  
   

    </div>
  )
}

export default Imp