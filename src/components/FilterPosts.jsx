import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/selecet/MySelect'
import '../App.css'


export default function FilterPosts({ filter, setFilter }) {
	return (
		<div className='filter-posts'>
			<MyInput
				placeholder='Поиск по названию'
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				type="text" />
			<MySelect
				defaultValue={'Сортировка постов'}
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				options={[
					{ value: 'title', name: 'По названию' },
					{ value: "body", name: 'По содержанию' }
				]} />

		</div>
	)
}
