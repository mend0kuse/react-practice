import React from 'react'
import PostItem from './PostItem'

function PostList({ title, posts, remove }) {
	if (!posts.length) {
		return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
	} else {
		return (

			<div >
				<h1 style={{ textAlign: 'center' }}>{title}</h1>
				{
					posts.map((post, index) => {
						return <PostItem post={post} key={post.id} number={index + 1} remove={remove} />
					})
				}
			</div >

		)
	}

}

export default PostList