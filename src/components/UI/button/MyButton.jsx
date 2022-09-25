import React from 'react'
import cl from './MyButton.module.css'

function MyButton({ children, ...props }) {
	return (
		<button {...props} className={cl.myBtn} >
			{children}
		</button>
	)
}

export default MyButton