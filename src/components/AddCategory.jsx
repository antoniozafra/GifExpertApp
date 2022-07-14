import { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState(''); 

  /*Con esta funcion vambiamos el valor del input del formulario */
  const onInputChange = ( { target } ) => {
    // event.preventDefault();
    setInputValue(target.value);
  }

  /*esta funcion previene la propagacion del formulario y enviamos el valor */
  const onSubmit = ( event ) => {
    event.preventDefault();
    
    if( inputValue.trim().length <= 1 ) return ;
    
    onNewCategory(inputValue);
    setInputValue('');
  }

  return (
     <form onSubmit={ onSubmit }>

        <input
          type="text"
          placeholder="Buscar Gifts"
          value={inputValue}
          onChange={onInputChange}
          

        />

    </form>
  )
}
