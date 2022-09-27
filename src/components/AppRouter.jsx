import React, { useContext } from 'react'


import { Route, Navigate, Routes } from 'react-router-dom'

import { AuthContext } from '../context/index.js';

import { privateRoutes, publicRoutes } from '../routes/routes.js';


function AppRouter() {
	const { isAuth, setIsAuth } = useContext(AuthContext)
	console.log(isAuth);
	return (
		isAuth
			? <Routes>
				{
					privateRoutes.map((route, index) => {
						return <Route key={index} exact={route.exact} path={route.path} element={route.element}></Route>
					})
				}
				<Route exact path='*' element={<Navigate to="/posts" />}></Route>
			</Routes>
			: <Routes>
				{
					publicRoutes.map((route, index) => {
						return <Route key={index} exact={route.exact} path={route.path} element={route.element}></Route>
					})
				}
				<Route exact path='*' element={<Navigate to="/login" />}></Route>
			</Routes>





		// {
		// 	publicRoutes.map(route => {
		// 		return <Route exact={route.exact} path={route.path} element={route.element}></Route>
		// 	})
		// }



		// <Route exact path='/error' element={<Error />}></Route>

		// <Route path="*" element={<Navigate to="/error" />} /> 

	)
}

export default AppRouter