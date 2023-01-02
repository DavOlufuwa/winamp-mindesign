import React, { useMemo, useState } from 'react'

const Umemo = () => {

    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false)
    
    const memoCalc =useMemo(()=>{
        expensiveFunc(num)
    }, [num])
    // const calculation = expensiveFunc(num);

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
        <h2>
            calculation : {memoCalc}
        </h2>
        <button
            onClick={()=> setDark(!dark)}
        >
            Toggle Darkness
        </button>
    </div>
  )
}

function expensiveFunc(num){
    console.log("loop started");
    for (let i = 0; i < 1000000000; i++){}
    return num;
}

export default Umemo