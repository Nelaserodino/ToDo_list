import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  }
  return (
    <button 
    className='CreateTodoButton'
    onClick={onClickButton} //Tengo que pasar una funcion (que ya la cree arriba)
    >
      +
    </button>
  );
}

export { CreateTodoButton };