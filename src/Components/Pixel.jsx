
import  "../css/Pixel.css"


//Pixel render, pulling data from MatrixSegment Component 
function Pixel({data}) {
    const {x,y,status,size,id,color} = data; 

   let style = {
        width: size + 'em',
        height: size + 'em',
        top: y * size + 'em',
        left: x * size + 'em',
        //setting up the color based on status value, {On or Off }
        background: status == 1 ? color : '#023',
        boxShadow: status == 1 ? '0 0 .6em '+ color : '0 0 0em #023'
   }

    return ( 
        <div id={id} style={style} className="Pixel"></div>
     );
}

export default Pixel;