import React, {useEffect, useState} from 'react'

export default function Useeffect() {
    const [number, setNumber] = useState(0)

    const Add = () => {       
        setNumber(number+1)
        }

    const [sqr, setSqr] = useState(0)
        // Arrow function and dependency [state]
        // use effect works based on dependency
    useEffect (()=>(
        setSqr(number*number)
    ), [number])

    // setTimeout(()=>(
    //         setNumber(number+1)
    // ), 1000)


    // Task: using timeout print timer(clock) - hours, min, sec
    const [time, setTime] = useState(0)
    useEffect(()=> {
        const timeoutId = setTimeout (()=>{
            setTime((prevTime)=> prevTime+1);
        },1000)
        return () => clearTimeout(timeoutId);
}, [time])
const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
        <h1 style={{color:'white', backgroundColor: "purple"}}>Timer clock</h1>
        {/* <h1>{number} - {sqr}</h1> */}
        {/* <button onClick={Add}>+</button> */}

        <h1>{formatTime(time)}</h1>

    </div>
  )
}
