import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from "../API/PostService.js"
import Loader from '../components/UI/loader/Loader.jsx'
import { useFetching } from '../hooks/useFetching.js'

function PostPage() {
	const params = useParams()

	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])

	const [fetchPostById, isPostByIdLoading, postByIdError] = useFetching(async () => {
		const response = await PostService.getById(params.id)
		setPost(response.data)
	})
	const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
		const response = await PostService.getCommentsById(params.id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById()
		fetchComments()
	}, [])

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Вы открыли пост с id = {post.id}</h1>
			{isPostByIdLoading
				? <Loader />
				: <div style={{ textAlign: 'center' }}>{post.title}</div>
			}
			{isCommentsLoading
				? <Loader />
				: <div>
					<p>Комментарии:</p>
					{comments.map((item, index) =>
						<div key={index}>
							<h5>{item.email}</h5>
							<p>{item.body}</p>
						</div>
					)}
				</div>
			}
		</div>
	)
}

export default PostPage