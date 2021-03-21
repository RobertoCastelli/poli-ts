import React, { useState } from "react"
//components
import Title from "./components/Title"
import TodoList from "./components/TodoList"
import AddTodoForm from "./components/AddTodoForm"
import Footer from "./components/Footer"

const initialTodos: Todo[] = [
	{
		text: "walk the dog",
		complete: false,
	},
	{
		text: "write an app",
		complete: true,
	},
]

function App() {
	const [todos, setTodos] = useState(initialTodos)

	const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
		const newTodos = todos.map((todo) => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete,
				}
			}
			return todo
		})
		setTodos(newTodos)
	}

	const addTodo: AddTodo = (text: string) => {
		const newTodo = { text, complete: false }
		setTodos([...todos, newTodo])
	}

	return (
		<ul>
			<Title />
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<AddTodoForm addTodo={addTodo} />
			<Footer />
		</ul>
	)
}

export default App
