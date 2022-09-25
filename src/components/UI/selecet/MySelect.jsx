import React from 'react'

export default function MySelect({ options, onChange, value, defaultValue }) {
	return (
		<select
			value={value}
			onChange={e => onChange(e.target.value)}
		>
			<option disabled value="">{defaultValue}</option>
			{options.map((item) => {
				return <option key={item.value} value={item.value}>{item.name}</option>
			})}
		</select>
	)
}
