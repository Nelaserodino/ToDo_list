import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState('');
  // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  
  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };
  
  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue('')
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Create new task</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="E.g:  Take Johnny to the airport"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export { TodoForm };