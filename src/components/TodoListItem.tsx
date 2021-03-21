import React from "react"

interface Props {
	todo: Todo
	toggleTodo: ToggleTodo
}

const TodoListItem: React.FunctionComponent<Props> = ({ todo, toggleTodo }) => {
	return (
		<li>
			<label
				htmlFor='todoCheck'
				style={{ textDecoration: todo.complete ? "line-through" : undefined }}>
				<input
					type='checkbox'
					name='todoCheck'
					checked={todo.complete}
					onClick={() => toggleTodo(todo)}
				/>
				{todo.text}
			</label>
		</li>
	)
}

export default TodoListItem
