import { useState } from "react";
import Pixel from "./Pixel";
import { useEffect } from "react";
import  "../css/MatrixSegment.css"
import {DIGITS} from './Digits' 




function MatrixSegment(props) {
    const {inputData} = props; 
    const[pixelsArray,setPixelsArray] = useState([]); 


    let segmentPropertis = {
        pixelSize :1,
        pixelOnColor: '#f50',
        columns: 5, 
        rows:7
    }
   // setting up width and height of the segment based on  {PixelSize, columns, rows  }
    let style = {
        width: segmentPropertis.pixelSize * segmentPropertis.columns + 'em',
        height: segmentPropertis.pixelSize * segmentPropertis.rows + 'em'
    }


    // Generating array of Pixel objects that every single obj has dynamic value of {On Off} status depends on inputData
    function generatePixels(rows,columns,pixelSize,pixelOnColor){
        let pixelsArray = []; 
        let IdCounter = 0 ;
        let InputDigit = charToMatrixDigits(DIGITS,inputData); 

        for (let row = 0; row < rows; row++) {
             for (let column = 0; column < columns; column++) {
                
                let pixel = {
                    size:pixelSize,
                    x:column,
                    y:row,
                    status:InputDigit[IdCounter],
                    id:IdCounter,
                    color: pixelOnColor
                }
                pixelsArray.push(pixel);
                IdCounter++; 
            }
            
        }
        return pixelsArray; 
    }

    // Converting string digits to display array from Digits.js file 
    function charToMatrixDigits(digits,input){
        switch(input){
            case 0 : 
            return digits.digit0;
            case 1: 
            return digits.digit1;
            case 2: 
            return digits.digit2; 
            case 3: 
            return digits.digit3; 
            case 4: 
            return digits.digit4; 
            case 5: 
            return digits.digit5; 
            case 6: 
            return digits.digit6; 
            case 7: 
            return digits.digit7; 
            case 8: 
            return digits.digit8;
            case 9: 
            return digits.digit9;
            case ':': 
            return digits.digitColon;
            default : 
            return []; 
        }
    }
    
    //updateing the value of pixels status, triggers every time InputData changes 
    function updateValue(){
        setPixelsArray(generatePixels(segmentPropertis.rows,segmentPropertis.columns,segmentPropertis.pixelSize,segmentPropertis.pixelOnColor))
    }

    useEffect(()=> {
        updateValue();
    },[inputData]);

    return ( 
        <div className="segment_wrapper">
            <div style={style} className="MatrixSegment">
                {
                    pixelsArray && pixelsArray.map((pixel, i) =>
                        <Pixel key={i} data={pixel} />
                    )
                }
            </div>
        </div>

     );
}

export default MatrixSegment;