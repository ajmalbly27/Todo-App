import React, { useState } from "react";
import './TodoApp.css';

const TodoApp = () => {

    const [todos, setTodos] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim()!==''){
            setTodos([...todos, userInput]);
            setUserInput('');
        }
    }

    function deleteTodo(index) {
        todos.splice(index,1);
        setTodos([...todos]);
    }

    const updateTodo = (index, updatedTodo) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = updatedTodo;
        setTodos(updatedTodos);
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }
    
    return(
        <div className="container">
            <h1>Todo List</h1>
            <div className="input-item">
                <form onSubmit={onFormSubmit} className="form-input">
                    <input 
                        type="text"
                        className="inputbox"
                        placeholder="Add an todo here..."
                        value = {userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    />
                    <input type="submit" className="btn add-btn" value="Add Item"/>
                </form>             
            </div>
            <div>
                <input
                    type="text"
                    className="inputbox search-item"
                    placeholder="Search an item here..."
                    onChange={(e) => handleSearch(e)}
                />
            </div>
            <ul>
                {todos.map((todo, index) => {
                    if(searchTerm && !todo.toLowerCase().includes(searchTerm.toLowerCase())){
                        return null;
                    }
                    return(            
                        <li key={index} className="list-item">
                            <input 
                                type="text"
                                value={todo}
                                className="inputbox"
                                onChange={(e) => updateTodo(index, e.target.value)}
                            />
                            <button className="btn" onClick={() => deleteTodo(index)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
export default TodoApp;