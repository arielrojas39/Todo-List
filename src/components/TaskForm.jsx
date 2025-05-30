//Importamos useState para poder manejar los estados del componente
import { useState } from 'react';
import './TaskForm.css'
//Declaramos funcion y pasamos la funcion { onAdd } como argumento
export default function TaskForm( {onAdd} ) {
//declaramos el estado del texto de entrada y su funcion set
  const [text, setText] = useState('');

//handlesubmit es la funcion que se ejecuta cuando se envia el formulario
  const handleSubmit = (e) => {
    //el valor del parametro e es el evento que se ejecuta cuando se envia el formulario
    //y e.preventDefault() es la funcion que evita que el formulario se recargue
    e.preventDefault();
    //si el texto no esta vacio, se ejecuta la funcion onAdd
    if (text.trim() !== '') {
      //almacenamos el texto en el array todos
      onAdd(text);
      //limpiamos el input luego de almacenar informacion
      setText('');
    }
  };

  return (
    //onSubmit indica que cuando el formulario sea enviado a traves
    //de un boton o presionando enter en el input, se ejecute la funcion handleSubmit
    <form className='wrapper' onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Nueva tarea"
        //inidcamos a la etiqueta input que el valor que debe contener y msotrar
        //dentro de esa etiqueta corresponde a la variable text
        value={text}
        // onChange maneja el evento que dispara el elemento input
        //y lo modifica desde setText
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}