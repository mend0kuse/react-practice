import React, { useEffect, useMemo, useState } from 'react';


import '../App.css';

import FilterPosts from '../components/FilterPosts';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/modal/MyModal';
import Loader from '../components/UI/loader/Loader';

import { useSortedAndSearchedPosts } from '../hooks/usePost.js'
import { useFetching } from '../hooks/useFetching.js'
import PostService from '../components/API/PostService.js'
import { getPagesCount, pagesTotalArray } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
	const [posts, setPosts] = useState([])
	const [modal, setModal] = useState(false)

	const [filter, setFilter] = useState({ sort: '', query: '' })
	const searchedAndSortedPosts = useSortedAndSearchedPosts(posts, filter.sort, filter.query)

	const [totalPages, setTotalPages] = useState();
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);


	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page)
		setPosts(response.data);
		const totalCount = response.headers['x-total-count']
		setTotalPages(getPagesCount(totalCount, limit))
	})


	useEffect(() => {
		fetchPosts()
	}, [page])


	const changePage = (page) => {
		setPage(page)
	}
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = (post) => {
		setPosts(posts.filter(item => item.id !== post.id))
	}
	return (
		<div className="App">
			<MyButton onClick={() => setModal(true)} >Создать пост</MyButton>
			<FilterPosts filter={filter} setFilter={setFilter} />
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{ margin: '15px 0', backgroundColor: "black" }}></hr>

			{postError && <h1>Произошла ошибка {postError} </h1>}

			{isPostsLoading
				? <Loader />
				: <PostList title={'Посты'} posts={searchedAndSortedPosts} remove={removePost} />
			}
			<Pagination totalPages={totalPages} changePage={changePage} page={page} />
		</div>
	);
}

export default Posts;
