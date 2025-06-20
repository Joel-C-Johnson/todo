import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue.trim(),
          completed: false
        }
      ]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '600px', 
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '30px'
      }}>
        Todo App
      </h1>

      {/* Input form */}
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        marginBottom: '30px' 
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a todo..."
          style={{
            flex: '1',
            padding: '12px',
            fontSize: '16px',
            border: '2px solid #ddd',
            borderRadius: '5px',
            outline: 'none'
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Add
        </button>
      </div>

      {/* Todo list */}
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              marginBottom: '10px',
              backgroundColor: todo.completed ? '#f8f9fa' : 'white'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{
                width: '18px',
                height: '18px',
                cursor: 'pointer'
              }}
            />
            
            <span style={{
              flex: '1',
              fontSize: '16px',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#666' : '#333'
            }}>
              {todo.text}
            </span>
            
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                padding: '8px 12px',
                fontSize: '14px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              Delete
            </button>
          </div>
        ))}
        
        {todos.length === 0 && (
          <p style={{ 
            textAlign: 'center', 
            color: '#666',
            fontStyle: 'italic',
            marginTop: '20px'
          }}>
            No todos yet. Add one above!
          </p>
        )}
      </div>
    </div>
  );
}