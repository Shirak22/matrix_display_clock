import {useEffect, useState } from 'react';
import MatrixSegment from './MatrixSegment'

function Display({data}) {
    let metrixSize = 20; 
    const [date, setDate] = useState(new Date());
    const [seconds,updateSeconds] = useState(split2DigitNumbers(date.getSeconds())); 
    const [minutes,updateMinutes] = useState(split2DigitNumbers(date.getHours())); 
    const [hours,updateHours] = useState(split2DigitNumbers(date.getMinutes())); 

    function refreshClock() {
        let newDate = new Date(); 
        setDate(newDate);
        updateSeconds(split2DigitNumbers(newDate.getSeconds()));
        updateHours(split2DigitNumbers(newDate.getHours()));
        updateMinutes(split2DigitNumbers(newDate.getMinutes()));
      }

      function split2DigitNumbers(num){
        
        if(num > 9) {
           return num.toString().split(''); 
        }else {
            return ['0',num.toString()];
        }
      }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        console.log(split2DigitNumbers(3));
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return ( 

        <div className="Display">
            <MatrixSegment inputData={parseInt(hours[0])} pixelSize={metrixSize} />
            <MatrixSegment inputData={parseInt(hours[1])} pixelSize={metrixSize} />
            <MatrixSegment inputData={':'} pixelSize={metrixSize} />
            <MatrixSegment inputData={parseInt(minutes[0])} pixelSize={metrixSize} />
            <MatrixSegment inputData={parseInt(minutes[1])} pixelSize={metrixSize} />
            <MatrixSegment inputData={':'} pixelSize={metrixSize} />
            <MatrixSegment inputData={parseInt(seconds[0])} pixelSize={metrixSize} />
            <MatrixSegment inputData={parseInt(seconds[1])} pixelSize={metrixSize} />

        </div>
   

     );
}

export default Display;