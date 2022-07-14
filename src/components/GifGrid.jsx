import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid =  ( {category} ) => {

    const {images, isLoading} =  useFetchGifs( category );



  return (
    <>
        <h3>{category}</h3>
        
        {/*ABRIMOS UN TERNARIO PARA INTRODUCIR CARGANDO... */}
        {
            isLoading  &&  ( <h2>Cargando</h2>)
            
        }
      
        {/* <h2 className={ isLoading }>Cargando...</h2> */}
                
        
    
        <div className="card-grid">

            { 
            
            images.map( ( image ) => (
                <GifItem key={ image.id }
                    /*Esparcimos  las props de las imagenes */
                    { ...image }
                />
            ))

            }

        </div>
        
{/*     
        <h3>{category}</h3>
        <p>Hola Mundo</p>
        
        <button onClick={ () => {setcounter(counter + 1)}}>+1</button> */}
    </>
    )
}
