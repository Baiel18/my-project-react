import React, { useEffect, useState } from 'react';


function Todo() {
    const [value, setValue] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [todos, setTodos] = useState(() => {
        const localStorae = JSON.parse(localStorage.getItem('todo'))
        return localStorae || []
    })

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos))
    }, [todos])
    function handleChanche(id) {
        setTodos(todos.map(item => {
            if (item.id === id) {
                item.complited = !item.complited
            }
            return item
        })
        )
    }
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function handleSumbit(e) {
        e.preventDefault()
        if (value, time, date) {
            const newTodo = { id: Math.round(Math.random() * 100), title: value,time:time,date:date, complited: false }
            setTodos(todos => [...todos, newTodo])
            setValue('')
            setDate('')
            setTime('')
        } else {
            alert('add ?')
        }
    }

    return (
        <div className="App">
            <form onSubmit={(e) => handleSumbit(e)}>
                <input type='text'
                    placeholder='App...'
                    className='enterInput'
                    onChange={(e) => { setValue(e.target.value) }}
                    value={value}
                />
                <input
                    onChange={(e) => { setTime(e.target.value) }}
                    value={time}
                    className='enterInputTime'
                    type="time"
                />
                <input
                    onChange={(e) => { setDate(e.target.value) }}
                    value={date}
                    className='enterInputDate'
                    type="date"
                />
                <button className='addBtn'>add</button>
            </form>
            <ul className='list'>
                {todos.map(todo => {
                    return (
                        <li key={todo.id} className={todo.complited === true ? 'done' : ''}>
                            <input className='checkbox' type='checkbox'
                                checked={todo.complited}
                                onChange={() => handleChanche(todo.id)} />
                           <span className='title'>{todo.title} -</span> 
                           <span className='date'> {todo.time} / {todo.date}</span> 
                        
                            <button className='delete' onClick={() => removeTodo(todo.id)}>delete</button>
                        </li>
                    )
                })
                }
            </ul>

        </div>
    );
}

export default Todo;
