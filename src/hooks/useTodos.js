import { useState, useEffect } from 'react';

// Definimos la funcion y el estado
export function useTodos() {
  // Declaramos el estado y como se inicializa
  const [todos, setTodos] = useState(() => {
    //Obtenemos el almacenamiento del navegador
    const stored = localStorage.getItem('todos');
    //En en el caso de obtener el string lo convertimos a un objeto JSON
    //caso contrario retornamos un array vacio
    return stored ? JSON.parse(stored) : [];
  });

  //este useeffect "observa" el array [todo] y cuando se
  //renderiza o actualiza el componente guarda la informacion
  //en el almacenamiento del navegador
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //Utilizamos el spread operator ...todos para almacenar toda la informacion
  //ya existente y creamos un nuevo objeto con un id unico, el texto introducido en el 
  //input y el estado completado inicializado en false
  const addTodo = (text) => {
    setTodos([...todos, { id: crypto.randomUUID(), text, completed: false }]);
  };

  //Manejamos el cambio de estado de completed utilizando el spread 
  //operator ...todos para almacenar toda la informacion ya existente 
  //y actualizamos el atributo completed  del objeto con el id correspondiente
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  //utilizamos la funcion de orden superior filter para crear un nuevo
  //array donde se incluyen todos los objetos que no tienen el id correspondiente
  //y asi actualizar el estado de todos a excepcion del especifiacdo a eliminar
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  //retornamos el estado y las funciones para interactuar con los componentes
  return { todos, addTodo, toggleTodo, deleteTodo };
}