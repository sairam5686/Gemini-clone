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
      let res_arr = responsee.split("**");
      let new_res="";
      for (let i = 0; i < res_arr.length; i++) {
        if (i==0 || i%2 !==1) {
          new_res +=res_arr[i];
        }else{
          new_res += "<b>"+res_arr[i]+"</b>";   
            }
      }
      let new2_res = new_res.split("*").join("</br>");
      setSkeleton(false);
      setResponse(new2_res);
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