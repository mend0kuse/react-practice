import React from 'react'
import cl from './myModal.module.css'


function myModal({ children, visible, setVisible }) {
	let rootClass = [cl.myModal]
	if (visible) {
		rootClass.push(cl.active)
	}

	return (
		<div className={rootClass.join(' ')} onClick={() => setVisible(false)}>
			<div className={cl.myModal__content} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div >
	)
}

export default myModal