import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs';


export const useFetchGifs = ( category ) => {
   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState([]);

    const getImages =  async () =>  {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);

    };


    useEffect( () => {
        /*LLAMAMOS A LA FUNCION PARA LA CREACION DEL COMPONENTE */
       getImages();
        
    }, [] );


    return {
    images,
    isLoading
    };

}
