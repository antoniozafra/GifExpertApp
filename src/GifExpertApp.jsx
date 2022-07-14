import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { GifGrid} from './components/GifGrid';


export const GifExpertApp = () => {

  //DECLARAMOS EL USESTATE Y EL VALOR DE LAS CATEGORIAS POR DEFECTO
  const [categories, setCategories] = useState([ 'Desarrollo Web']);
  

    const onAddCategory  = ( newCategory) => {
      if( categories.includes(newCategory)) return; 
      setCategories(  [newCategory, ...categories]);

    }


  return (
    <>
    <h1>Gift Expert App</h1>

<AddCategory onNewCategory =  { (value) => onAddCategory( value ) } />



    {/*Recorremos todos los valores de categorias y lo mostramos por pantalla*/}
      {
        categories.map( (category) => (
          <GifGrid key={ category } category = {category}/>
          
          )
        )
      }

        {/*GIFT ITEM */}


    </>
  )
}
