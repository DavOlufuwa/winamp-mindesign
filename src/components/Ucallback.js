import React, { useCallback, useState } from 'react'
import Ucallbackchild from './Ucallbackchild';


const Ucallback = () => {

const [num, setNum] = useState(1);
const [dark, setDark] = useState(false)


// useCallBack
const calculateTable = useCallback(()=>{
    return [num * 1, num * 2, num * 3, num * 4, num * 5]
}, [num])

const cssStyle = {
    backgroundColor : dark ? "black" : "white",
    color: dark ? "white" : "black",
}



  return (
    <div style={cssStyle}>
        <input  
            type='number'
            onChange={(e)=> setNum(e.target.valueAsNumber)}
            value={num}
        />
        <Ucallbackchild calculateTable={calculateTable}/>
        <button
            onClick={()=> setDark(!dark)}
        >
            Toggle Darkness
        </button>
    </div>
  )
}

export default Ucallback