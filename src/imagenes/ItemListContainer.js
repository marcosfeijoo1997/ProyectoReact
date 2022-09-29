const AportedeSoldadura=({Nombre,imagen,descripcion})=>{return(

    <div className="Producto">
    <h3>{Nombre}</h3>
    <img src= {imagen}></img>
    <h5>{descripcion}</h5>
    </div>


)
    
}
export default AportedeSoldadura