//Importamos el custom hooks para manejar la logica 
import TodoItem from './TodoItem';

//exportamos el componente con las la Lista de Tareas y sus funcionalidades
export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
    {/* Literalmente necesitamos un map porque react necesita
    el objeto para renderizar, un foreach no funcinoaria */}
      {todos.map(todo => (
        <TodoItem 
        //Para cada item de la lista, le pasamos el todo, el onToggle y el onDelete
        //Por sobre todo siempre utilizar key para que react funcione correctamente
        //y renderice solamente aquellos componentes que se hayan modificado
          key={todo.id} 
          todo={todo} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}
