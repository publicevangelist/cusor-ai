'use client';

import { useState, useEffect } from 'react';
import styles from '../todo.module.css';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date().toLocaleString('ko-KR')
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    if (newText.trim() === '') return;
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText.trim() } : todo
    ));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className={styles.todoContainer}>
      <h2 className={styles.todoTitle}>📝 To-Do 리스트</h2>
      
      <div className={styles.stats}>
        <span className={styles.statItem}>전체: {totalTodos}</span>
        <span className={styles.statItem}>진행중: {activeTodos}</span>
        <span className={styles.statItem}>완료: {completedTodos}</span>
      </div>

      <form onSubmit={addTodo} className={styles.inputForm}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요..."
          className={styles.todoInput}
        />
        <button type="submit" className={styles.addButton}>
          추가
        </button>
      </form>

      <div className={styles.filterButtons}>
        <button
          onClick={() => setFilter('all')}
          className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
        >
          전체
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`${styles.filterButton} ${filter === 'active' ? styles.active : ''}`}
        >
          진행중
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`${styles.filterButton} ${filter === 'completed' ? styles.active : ''}`}
        >
          완료
        </button>
      </div>

      <div className={styles.todoList}>
        {filteredTodos.length === 0 ? (
          <p className={styles.emptyMessage}>
            {filter === 'all' ? '할 일이 없습니다. 새로운 할 일을 추가해보세요!' : 
             filter === 'active' ? '진행중인 할 일이 없습니다.' : '완료된 할 일이 없습니다.'}
          </p>
        ) : (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editValue);
      setIsEditing(false);
    } else {
      setIsEditing(true);
      setEditValue(todo.text);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue(todo.text);
  };

  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <div className={styles.todoContent}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className={styles.todoCheckbox}
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className={styles.editInput}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
            autoFocus
          />
        ) : (
          <span className={styles.todoText}>{todo.text}</span>
        )}
        
        <span className={styles.todoDate}>{todo.createdAt}</span>
      </div>
      
      <div className={styles.todoActions}>
        {isEditing ? (
          <>
            <button onClick={handleEdit} className={styles.saveButton}>
              저장
            </button>
            <button onClick={handleCancel} className={styles.cancelButton}>
              취소
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className={styles.editButton}>
              수정
            </button>
            <button onClick={() => onDelete(todo.id)} className={styles.deleteButton}>
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
}
