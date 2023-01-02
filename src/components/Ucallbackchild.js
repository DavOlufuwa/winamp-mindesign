import React, { useEffect, useState } from 'react'

const Ucallbackchild = ({calculateTable}) => {
    const [rows, setRows] = useState([]);

    useEffect(()=>{
        console.log("Child Component Runs!")
        setRows(calculateTable())
    }, [calculateTable])

    return rows.map((row, index)=>{
        return <p key={index}>{row}</p>
    })
}

export default Ucallbackchild