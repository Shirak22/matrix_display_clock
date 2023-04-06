import { useState } from "react";
import Pixel from "./Pixel";
import { useEffect } from "react";
import  "../css/MatrixSegment.css"


let DIGITS = {
    digit0:[
        0,1,1,1,0,
        1,0,0,0,1,
        1,0,0,1,1,
        1,0,1,0,1,
        1,1,0,0,1,
        1,0,0,0,1,
        0,1,1,1,0

    ],

    digit1:[
       0,0,1,0,0,
       0,1,1,0,0,
       0,0,1,0,0,
       0,0,1,0,0,
       0,0,1,0,0,
       0,0,1,0,0,
       1,1,1,1,1
    ],
    digit2:[
        0,1,1,1,0,
        1,0,0,0,1,
        1,0,0,0,1,
        0,0,0,1,0,
        0,0,1,0,0,
        0,1,0,0,0,
        1,1,1,1,1

    ],
    digit3:[
        0,1,1,1,0,
        1,0,0,0,1,
        0,0,0,0,1,
        0,0,1,1,0,
        0,0,0,0,1,
        1,0,0,0,1,
        0,1,1,1,0

    ],
    digit4:[
        0,0,0,1,0,
        0,0,1,1,0,
        0,1,0,1,0,
        1,0,0,1,0,
        1,1,1,1,1,
        0,0,0,1,0,
        0,0,0,1,0

    ],
    digit5:[
        1,1,1,1,1,
        1,0,0,0,0,
        1,1,1,1,0,
        0,0,0,0,1,
        0,0,0,0,1,
        1,0,0,0,1,
        0,1,1,1,0

    ],
    digit6:[
        0,1,1,1,0,
        1,0,0,0,1,
        1,0,0,0,0,
        1,1,1,1,0,
        1,0,0,0,1,
        1,0,0,0,1,
        0,1,1,1,0

    ],
    digit7:[
        1,1,1,1,1,
        0,0,0,0,1,
        0,0,0,1,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0,
        0,0,1,0,0

    ], digit8:[
        0,1,1,1,0,
        1,0,0,0,1,
        1,0,0,0,1,
        0,1,1,1,0,
        1,0,0,0,1,
        1,0,0,0,1,
        0,1,1,1,0

    ], digit9:[
        0,1,1,1,0,
        1,0,0,0,1,
        1,0,0,0,1,
        0,1,1,1,1,
        0,0,0,0,1,
        1,0,0,0,1,
        0,1,1,1,0

    ], digitColon:[
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,0,0,0,
        0,0,1,0,0,
        0,0,0,0,0,
        0,0,1,0,0,
       

    ]

}



function MatrixSegment(props) {
    const {inputData,pixelSize} = props; 
    const[pixelsArray,setPixelsArray] = useState([]); 

    let segmentPropertis = {
        pixelSize : !pixelSize ? 10 : pixelSize,
        columns: 5,
        rows:7
    }

    let style = {
        width: segmentPropertis.pixelSize * segmentPropertis.columns,
        height: segmentPropertis.pixelSize * segmentPropertis.rows
    }

    function generatePixels(rows,columns,pixelSize){
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
                    id:IdCounter
                }
                pixelsArray.push(pixel);
                IdCounter++; 
            }
            
        }
        return pixelsArray; 
    }

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
    

    function updateValue(){
        setPixelsArray(generatePixels(segmentPropertis.rows,segmentPropertis.columns,segmentPropertis.pixelSize))
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