import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContextProvider'

const Childcomponent = () => {
    const Login = useContext(LoginContext)
    console.log(Login)
  return (
    <div>
        {`The login context value is  ${Login}`}
    </div>
  )
}

export default Childcomponent