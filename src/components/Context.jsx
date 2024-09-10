import React, { createContext, useState, useCallback } from 'react';

// Define the context with default values
export const MyContext = createContext({
  allTodos: [],
  addTodo: () => {},
  updateTodo: (id, newTitle, newContent) => {},
  deleteTodo: (id) => {},
});

const MyContextProvider = ({ children }) => {
  const [allTodos, setAllTodos] = useState([]);

  // Function to add a new todo
  const addTodo = useCallback(() => {
    setAllTodos(prevTodos => [
      { id: Date.now(), todotitle: 'New', todocontent: 'Empty' },
      ...prevTodos,
    ]);
  }, []);

  // Function to update an existing todo
  const updateTodo = useCallback((id, newTitle, newContent) => {
    setAllTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, todotitle: newTitle, todocontent: newContent }
          : todo
      )
    );
  }, []);

  // Function to delete a todo
  const deleteTodo = useCallback(id => {
    setAllTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  }, []);

  return (
    <MyContext.Provider value={{ allTodos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
    