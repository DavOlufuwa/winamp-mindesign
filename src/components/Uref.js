import React, { useEffect, useRef, useState } from 'react'

const Uref = () => {
    const [name, setName] = useState("")
    // We use useRef to count the number of renders
    const rerenderCount = useRef(0)
    useEffect(()=>{
        rerenderCount.current = rerenderCount.current + 1
    })
    // to access DOM Elements
    const inputBox = useRef()   

    const boxChange = ()=>{
        inputBox.current.style.borderRadius = '2rem'
    }


  return (
    <div>
        <input type='text' onChange={(e)=>setName(e.target.value)}/>
        <h2>
            Name is {name}
        </h2>
        <h2>
            rerender count is {rerenderCount.current}
        </h2>

        <input type="text" name="" id=""  ref={inputBox}/>
        <button onClick={boxChange}>change 2nd box</button>
    </div>
  )
}

export default Uref