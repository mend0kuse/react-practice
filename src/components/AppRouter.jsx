import React from 'react'


import { Route, Navigate, Routes } from 'react-router-dom'
import About from '../pages/About.jsx';
import Posts from '../pages/Posts';
import Error from '../pages/Error';


function AppRouter() {
	return (
		<Routes>
			<Route exact path='/about' element={<About />}></Route>
			<Route exact path='/posts' element={<Posts />}></Route>
			<Route exact path='/error' element={<Error />}></Route>

			<Route path="*" element={<Navigate to="/error" />} />
		</Routes>
	)
}

export default AppRouter