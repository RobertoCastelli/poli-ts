import React, { useState } from "react"

interface Props {
	addTodo: AddTodo
}

const AddTodoForm: React.FunctionComponent<Props> = ({ addTodo }) => {
	const [text, setText] = useState("")

	return (
		<form>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button
				type='submit'
				onClick={(e) => {
					e.preventDefault()
					addTodo(text)
					setText("")
				}}>
				add
			</button>
		</form>
	)
}

export default AddTodoForm
