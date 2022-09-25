import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

function PostForm({ create }) {
	const [post, setPost] = useState({ title: '', body: '' })
	


	const addNewPost = (e) => {
		let newPost = {
			...post,
			id: Date.now()
		}
		create(newPost)
		setPost({ title: '', body: '' })
	}

	return (
		<form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<MyInput placeholder='Введите название' value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" />
			<MyInput placeholder='Введите содержание' value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" />
			<MyButton onClick={(e) => {
				e.preventDefault()
				addNewPost()
			}}>
				Создать
			</MyButton>
		</form>
	)
}

export default PostForm