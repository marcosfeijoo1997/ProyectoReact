
import AportedeSoldadura from './imagenes/ItemListContainer';
import electrodos from './imagenes/electrodos2.jpg'
import flux from './imagenes/rollo flux.jpg'

const Producto=()=>{
    return (
      <div className="productos">
        <AportedeSoldadura Nombre="Electrodos">
          
          </AportedeSoldadura>

          <AportedeSoldadura imagen={electrodos}>

          </AportedeSoldadura>

          <AportedeSoldadura descripcion="Electrodos mayormente utilizado para materiales de espesor grueso, se venden en presentanciones de 1,6mm;2.00;2,5;3,25 y 4mm">
          </AportedeSoldadura>

          <AportedeSoldadura Nombre={"Alambre flux"}></AportedeSoldadura>
          <AportedeSoldadura imagen={flux}> </AportedeSoldadura>
          <AportedeSoldadura descripcion="Alambre mayormente utilizado para materiales de espesor fino, se venden en presentanciones de 0,8mm,0,9mm,1,2mmn">
          </AportedeSoldadura>
        
       
        
       
        
    
     
     
      </div>
      
    );
  }


export default Producto