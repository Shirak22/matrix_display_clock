import { useEffect, useState } from 'react';
import MatrixSegment from './MatrixSegment'
import "../css/Display.css";

function Display() {
    const [date, setDate] = useState(new Date());
    const [seconds, updateSeconds] = useState(split2DigitNumbers(date.getSeconds()));
    const [minutes, updateMinutes] = useState(split2DigitNumbers(date.getHours()));
    const [hours, updateHours] = useState(split2DigitNumbers(date.getMinutes()));

    function refreshClock() {
        let newDate = new Date();
        setDate(newDate);
        updateSeconds(split2DigitNumbers(newDate.getSeconds()));
        updateHours(split2DigitNumbers(newDate.getHours()));
        updateMinutes(split2DigitNumbers(newDate.getMinutes()));
    }

    function split2DigitNumbers(num) {

        if (num > 9) {
            return num.toString().split('');
        } else {
            return ['0', num.toString()];
        }
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    
    return (

        <div className="Display">

            <MatrixSegment inputData={parseInt(hours[0])}  />
            <MatrixSegment inputData={parseInt(hours[1])}  />
            <MatrixSegment inputData={':'}                  />
            <MatrixSegment inputData={parseInt(minutes[0])}  />
            <MatrixSegment inputData={parseInt(minutes[1])} />
            <MatrixSegment inputData={':'}                   />
            <MatrixSegment inputData={parseInt(seconds[0])}  />
            <MatrixSegment inputData={parseInt(seconds[1])}  />
            
        </div>


    );
}

export default Display;