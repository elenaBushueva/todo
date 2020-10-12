import React, {useState} from 'react';
import Todo from './Todo';
import TodoController from "./TodoController";

export default function App() {
    const initState = [
        {id: 1, title: 'First', description: 'Learn HTML'},
        {id: 2, title: 'Second', description: 'Learn CSS'},
        {id: 3, title: 'Third', description: 'Learn JS'},
        {id: 4, title: 'Forth', description: 'Learn React'},
    ]
    const [todos, setTodos] = useState(initState);

    const deleteTodo = (id) => {
        const newList = todos.filter(el => el.id !== id);
        setTodos(newList);
    }

    const moveTodo = (currentIndex, nextIndex) => {
        const newList = [...todos];

        const currentElem = newList[currentIndex];
        newList[currentIndex] = newList[nextIndex];
        newList[nextIndex] = currentElem;

        setTodos(newList);
    }

    const addTodo = (newTitle, newDescription) => {
        const newTodo = {
            id: Math.random(),
            title: newTitle,
            description: newDescription,
        }
        const newList = [...todos, newTodo];
        setTodos(newList);
    }

    const editTodo = (newTitle, id) => {
        const newTodos = todos.map(el => {
            if (el.id === id) return {...el, title: newTitle}
            return el
        })
        setTodos(newTodos);
    }
    return (
        <div>
            <TodoController addTodo={addTodo}/>

            {todos.map((el, index) => <Todo
                key={el.id}
                todo={el}
                deleteTodo={deleteTodo}
                moveTodo={moveTodo}
                index={index}
                isLast={index === todos.length - 1}
                editTodo={editTodo}/>
            )}
        </div>
    );
}