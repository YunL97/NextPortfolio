"use client"

import { useLoginStore } from "@/app/_store/login"
import { useDayStore } from "@/app/_store/nowday"
import { useState, useEffect, useRef } from "react"

interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface dayTodo {
  day: string
  todo: Todo[]
  studyTime: number
}

const MiddleTodo = () => {
  const { day, month, year, reRender, studyTime, setReRender } = useDayStore()
  const { login, data } = useLoginStore()
  const [todos, setTodos] = useState<Todo[]>([])
  const [localStudyTime, setLocalStudyTime] = useState(0)
  const [newTodo, setNewTodo] = useState("")

  const isFirstRender = useRef(true)
  //현재 날짜 todo, 공부시간 가져오기
  useEffect(() => {
    let savedTodos: string = ""
    if (login) {
      savedTodos = data.toString()
    } else {
      savedTodos = localStorage.getItem("todos1002") ?? ""
    }
    if (savedTodos) {
      const parsedTodos: dayTodo[] = JSON.parse(savedTodos)
      const currentDayTodos = parsedTodos.find(
        item => item.day === `${year}-${month}-${day}`
      )
      if (currentDayTodos) {
        setTodos(currentDayTodos.todo)
        setLocalStudyTime(currentDayTodos.studyTime ?? 0)
      } else {
        setTodos([])
        setLocalStudyTime(0)
      }
    } else {
      setTodos([])
      setLocalStudyTime(0)
    }
  }, [day, month, data, login])

  //todo add 했을때 localstorage 저장, 전역상태에 complated저장
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    setReRender(!reRender)
    const nowday = new Date().getDate()
    if (year == "" || month == "") return
    let dayTodo: dayTodo = {
      day: `${year}-${month}-${day}`,
      todo: todos,
      studyTime:
        `${year}-${month}-${day}` ===
        `${new Date().getFullYear().toString()}-${(
          new Date().getMonth() + 1
        ).toString()}-${new Date().getDate().toString()}`
          ? studyTime
          : localStudyTime
    }
    let savedTodos: string = ""
    if (login) {
      savedTodos = data.toString()
    } else {
      savedTodos = localStorage.getItem("todos1002") ?? ""
    }
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
      if (login) {
      } else {
        localStorage.setItem("todos1002", JSON.stringify(parsedTodos))
      }
    } else {
      if (login) {
      } else {
        localStorage.setItem("todos1002", JSON.stringify([dayTodo]))
      }
    }
  }, [todos, localStudyTime])

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
      <div className="flex flex-col items-center p-4 h-full">
        <h1 className="text-2xl font-bold mb-4">Daily Calendar</h1>
        <div className="flex mb-4 w-full">
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
        <div className="flex-col space-y-4 h-full w-full overflow-y-auto">
          <ul className="list-none p-4 overflow-y-auto h-full">
            {todos.map(todo => (
              <li key={todo.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                  className="mr-2"
                />
                <span
                  className={`flex-grow break-words${
                    todo.completed ? "line-through" : ""
                  }`}
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
    </div>
  )
}
export default MiddleTodo
