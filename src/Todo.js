import React, {useState} from 'react';

export default function Todo(props) {
    const [newTitle, setNewTitle]=useState('');
    const [isEditMode, setIsEditMode]=useState(false)

    const editButtonHandler = () => {
        props.editTodo(newTitle, props.todo.id);
        setNewTitle('');
    }

    return (
        <div>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.description}</p>
            <button onClick={() => props.deleteTodo(props.todo.id)}>delete</button>
            <button disabled={props.index === 0} onClick={()=>props.moveTodo(props.index, props.index - 1)}>up</button>
            <button disabled={props.isLast} onClick={()=>props.moveTodo(props.index, props.index + 1)}>down</button>
            <button>update</button>

            <button onClick={()=> setIsEditMode()}>edit</button>

            {isEditMode &&
            <>
                <label htmlFor="">title: </label>
                <input value={newTitle} type="text" onChange={(e) =>setNewTitle (e.target.value)}/>

                <button onClick={editButtonHandler}>update</button>
            </>}

            <br/>
        </div>
    );
}