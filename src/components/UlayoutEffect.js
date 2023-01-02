import React, {  useLayoutEffect, useRef, useState } from 'react'

const UlayoutEffect = () => {
const [toggle, setToggle]= useState(false)

const textDimension = useRef()

const textShowDimension = () =>{
    setToggle(!toggle)
}

useLayoutEffect(()=>{
    if(textDimension.current != null){
        const dimension = textDimension.current.getBoundingClientRect();
        console.log(dimension)
        textDimension.current.style.paddingTop = `${dimension.height}px`

    }
}, [toggle])

// useLayoutEffect(()=>{
//     console.log("useLayoutEffect is run")
// }, [toggle])

  return (
    <div>
        <button onClick={textShowDimension}>Toggle</button>
        {toggle && <h4 ref={textDimension}> Code is Showing</h4>}
    </div>
  )
}

export default UlayoutEffect