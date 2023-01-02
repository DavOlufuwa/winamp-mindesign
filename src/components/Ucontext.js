import React, {} from 'react'
import MainComponent from './MainComponent'
import LoginContextProvider from '../context/LoginContextProvider'
// creaate context


const Ucontext = () => {

  return (
    <LoginContextProvider>
        <div>
            <MainComponent/>
        </div>
    </LoginContextProvider>
  )
}

export default Ucontext