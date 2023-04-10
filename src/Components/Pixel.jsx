
import  "../css/Pixel.css"



function Pixel({data}) {
    const {x,y,status,size,id,color} = data; 

   let style = {
        width: size + 'em',
        height: size + 'em',
        top: y * size + 'em',
        left: x * size + 'em',
        background: status == 1 ? color : '#023',
        boxShadow: `0 0 .2em ${status == 1 ? color : '#023'}`
   }

    return ( 
        <div id={id} style={style} className="Pixel"></div>
     );
}

export default Pixel;