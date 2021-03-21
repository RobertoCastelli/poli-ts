import React from "react"
import TodoListItem from "./TodoListItem"

interface Props {
	todos: Todo[]
	toggleTodo: ToggleTodo
}

const TodoList: React.FunctionComponent<Props> = ({ todos, toggleTodo }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
			))}
		</ul>
	)
}

export default TodoList
