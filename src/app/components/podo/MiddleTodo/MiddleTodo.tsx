"use client"

import { useDayStore } from "@/app/_store/nowday"
import { useState, useEffect, useRef } from "react"

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface dayTodo {
  day: string
  todo: Todo[]
}

const MiddleTodo = () => {
  const { day, month, year } = useDayStore()
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos200")
    if (savedTodos) {
      const parsedTodos: dayTodo[] = JSON.parse(savedTodos)
      const currentDayTodos = parsedTodos.find(
        item => item.day === `${day}-${month}-${year}`
      )
      if (currentDayTodos) {
        console.log(currentDayTodos)
        setTodos(currentDayTodos.todo)
      } else {
        setTodos([])
      }
    }
  }, [day])

  useEffect(() => {
    const dayTodo: dayTodo = { day: `${day}-${month}-${year}`, todo: todos }
    const savedTodos = localStorage.getItem("todos200")
    if (savedTodos) {
      const parsedTodos: dayTodo[] = JSON.parse(savedTodos)
      const existingIndex = parsedTodos.findIndex(
        item => item.day === dayTodo.day
      )
      if (existingIndex > -1) {
        parsedTodos[existingIndex] = dayTodo
      } else {
        parsedTodos.push(dayTodo)
      }
      localStorage.setItem("todos200", JSON.stringify(parsedTodos))
    } else {
      localStorage.setItem("todos200", JSON.stringify([dayTodo]))
    }
  }, [todos])

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo("")
    }
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleToggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="bg-gray-100 h-full">
      <div className="flex flex-col items-center p-4 ">
        <h1 className="text-2xl font-bold mb-4">Daily Calendar</h1>
        <div className="flex mb-4 ">
          <input
            type="text"
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)}
            className="border p-2 flex-grow"
            placeholder="Add a new todo"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white p-2 ml-2"
          >
            Add
          </button>
        </div>
        <ul className="list-none p-0">
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
                className="mr-2"
              />
              <span
                className={`flex-grow ${todo.completed ? "line-through" : ""}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="bg-red-500 text-white p-2 ml-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default MiddleTodo
