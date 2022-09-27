import React from 'react'
import '../App.css'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

function PostItem(props) {
	const router = useNavigate()

	return (
		<div className={'post'}>
			<div>
				<p className={'post__title'}>{props.post.id}. {props.post.title}</p>
				<p className={'post__body'}>{props.post.body}</p>
			</div>
			<div className={'post__buttons'}>
				<MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
				<MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
			</div>
		</div >
	)
}

export default PostItem