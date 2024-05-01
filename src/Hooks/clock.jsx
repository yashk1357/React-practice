import React, {useState, useEffect} from "react";

function Clock(){
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval( () => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    },[])

    function formatTime(){
        const hrs = time.getHours()
        const minute  = time.getMinutes()
        const second = time.getSeconds()
        return `${hrs}:${minute}:${second}`
    }

    return(
        <div className="clock">
            <div className="clock-number">
              <h2 className="clock-heading">{formatTime()}</h2>
            </div>
        </div>
    )
}

export default Clock