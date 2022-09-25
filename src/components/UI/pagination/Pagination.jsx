import React from 'react'
import { pagesTotalArray } from '../../../utils/pages.js'

function Pagination({ totalPages, changePage, page }) {
	let totalPagesArray = pagesTotalArray(totalPages)

	return (
		<div className='page__wrapper'>
			{totalPagesArray.map(item => {
				return <span key={item} onClick={() => changePage(item)} className={item === page ? 'page page__current' : 'page'}>{item}</span>
			})
			}
		</div>
	)
}

export default Pagination