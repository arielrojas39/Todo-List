//Importamos 2 componentes y el Custon Hooks de useTodos
import TaskForm from './components/TaskForm';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';

//Componente principal, aqui ensamblaremos el resto de los
//componentes en forma de cascada o arbol
function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div style={{ maxWidth: '500px', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center' }}>📝 ToDo List</h1>
      
      <TaskForm onAdd={addTodo} />
      
      {todos.length > 0 ? (
        <TodoList 
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      ) : (
        <p style={{ textAlign: 'center' }}>No hay tareas. ¡Agregá una!</p>
      )}
    </div>
  );
}

export default App;