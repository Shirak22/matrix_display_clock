import { useEffect, useState } from 'react';
import MatrixSegment from './MatrixSegment'
import "../css/Display.css";


//Clock display 
function Display() {
    const [date, setDate] = useState(new Date());
    const [seconds, updateSeconds] = useState(split2DigitNumbers(date.getSeconds()));
    const [minutes, updateMinutes] = useState(split2DigitNumbers(date.getHours()));
    const [hours, updateHours] = useState(split2DigitNumbers(date.getMinutes()));


    //refreshClock function triggers every one second to update time every single second 
    function refreshClock() {
        let newDate = new Date();
        setDate(newDate);
        updateSeconds(split2DigitNumbers(newDate.getSeconds()));
        updateHours(split2DigitNumbers(newDate.getHours()));
        updateMinutes(split2DigitNumbers(newDate.getMinutes()));
    }

        // converting numbers to array of string digits, >> 9 => ['0','9']    >>  11 => ['1','1']
    function  split2DigitNumbers(num) {

        if (num > 9) {
            return num.toString().split('');
        } else {
            return ['0', num.toString()];
        }
    }

    useEffect(() => {

        //trigger  1000ms interval 
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