//Componente que muestra los diferentes elementos del array
//Declaramos la funcion la cual espera recibir un objeto
//que contenga el array de elementos, y las funcinoalidades de
//modificar y eliminar
export default function TodoItem({ todo, onToggle, onDelete }) {

    return (
      <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <input 
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        <button onClick={() => onDelete(todo.id)}>🗑️</button>
      </li>
    );
  }