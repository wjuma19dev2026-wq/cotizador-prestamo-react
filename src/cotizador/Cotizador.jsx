import { useState } from 'react'
import { Header } from './shared'

const theme = {
	textBlue: 'text-blue-500',
}

export const Cotizador = () => {
	const [cantidad, setCantidad] = useState(80)

	console.log(cantidad)

	return (
		<div className="my-20 max-w-lg mx-auto p-10 bg-white shadow">
			<Header theme={theme} />

			<h3>{cantidad}</h3>

			<input
				value={cantidad}
				onChange={e => setCantidad(e.target.value)}
				type="range"
				className="mt-5 w-full bg-gray-200 accent-lime-500 hover:accent-lime-600 hover:cursor-pointer"
			/>
		</div>
	)
}
