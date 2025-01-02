import React, { createContext } from 'react'
import run from '../config/Giminiapi';

export const Geminicontext = createContext();

const Api = ({children}) => {

    const prompt_logic = async (prompt) => {
        await run(prompt)
    }
    


    const Contextdata ={

    }

  return (
    <Geminicontext.Provider value={Contextdata} >
      <div>{children}</div>
    </Geminicontext.Provider>
    
  )
}

export default Api