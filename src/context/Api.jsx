import React, { createContext, useState } from 'react'
import run from '../config/Giminiapi';

export const Geminicontext = createContext();

const Api = ({children}) => {
   // for all the state variables
    
   const [Request, setRequest] = useState("");
   const [response, setResponse] = useState("");
   const [Pressed, setPressed] = useState(false);
   const [Skeleton, setSkeleton] = useState(false);


    const prompt_logic = async (prompt) => {
      setSkeleton(true);
      setPressed(true);
      const responsee =  await run(prompt);
      setSkeleton(false);
      setResponse(responsee);
    }



    // for the context datas and func

    const Contextdata ={
      Request, setRequest, response, setResponse, Pressed, setPressed, prompt_logic,Skeleton

    }

  return (
    <Geminicontext.Provider value={Contextdata} >
      <div>{children}</div>
    </Geminicontext.Provider>
    
  )
}

export default Api