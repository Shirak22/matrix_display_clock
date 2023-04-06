
import  "../css/Pixel.css"



function Pixel({data}) {
    const {x,y,status,size,id} = data; 

   let style = {
        width: size + 'px',
        height: size + 'px',
        top: y * size + 'px',
        left: x * size + 'px',
        background: status == 1 ? '#f50' : '#333',
        boxShadow: `0 0 3px ${status == 1 ? '#f50' : '#333'}`
   }

    return ( 
        <div id={id} style={style} className="Pixel"></div>
     );
}

export default Pixel;