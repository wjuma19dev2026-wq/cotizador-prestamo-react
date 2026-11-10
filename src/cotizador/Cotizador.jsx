import { useEffect, useState } from 'react'
import { clsx } from 'cn'

import { Header, Range } from './shared'
import { Button } from './components/Button'

import { MoneyFormat } from './lib/MoneyFormta'
import { CalcTotalPagar } from './lib/CalcTotalPagar'

const theme = {
	textBlue: 'text-blue-950',
	borderColor: 'border-blue-950',
}

export const Cotizador = () => {
	const [cantidad, setCantidad] = useState(10000)
	const [meses, setMeses] = useState(6)
	const [total, setTotal] = useState(0)
	const [pago, setPago] = useState(0)

	const handleChange = e => {
		const val = Number(e.target.value)
		setCantidad(val)
	}

	const handleClickDecrement = () => {
		if (cantidad <= 0) return
		setCantidad(prev => prev - 100)
	}

	const handleClickIncrement = () => {
		if (cantidad >= 20000) return
		setCantidad(prev => prev + 100)
	}

	//- Calcular el total a pagar
	useEffect(() => {
		;(function () {
			const totalAPagar = CalcTotalPagar(cantidad, meses)
			setTotal(totalAPagar)
		})()
	}, [cantidad, meses])

	//- Calcular el pago mensual
	useEffect(() => {
		;(function () {
			setPago(total / meses)
		})()
	}, [total, meses])

	return (
		<>
			<div className="my-20 max-w-lg mx-auto px-10 pb-10 bg-white shadow">
				<Header theme={theme} />

				<div className="flex justify-between mt-5">
					<Button
						queryFn={handleClickDecrement}
						content="-"
					/>
					<Button
						queryFn={handleClickIncrement}
						content="+"
					/>
				</div>

				<Range
					cantidad={cantidad}
					handleChange={handleChange}
				/>

				<h3
					className={clsx(
						'text-center mt-20 text-5xl font-bold',
						theme.textBlue,
					)}
				>
					{MoneyFormat(cantidad)}
				</h3>

				<h2 className="text-2xl font-extrabold text-gray-500 text-center mt-5">
					Elige un <span className={clsx(theme.textBlue)}>Plazo</span> a pagar
				</h2>

				<select
					value={meses}
					onChange={e => {
						setMeses(Number(e.target.value))
					}}
					className={clsx(
						'mt-5 p-2 w-full bg-white border rounded-lg text-center text-xl font-bold',
						theme.borderColor,
					)}
				>
					<option value="6">6 Meses</option>
					<option value="12">12 Meses</option>
					<option value="24">24 Meses</option>
				</select>

				<div className="my-5 space-y-3 p-3 bg-gray-50 text-center">
					<h2 className="text-2xl font-extrabold text-gray-500 text-center">
						Resumen <span className={clsx(theme.textBlue)}>de pagos</span>
					</h2>
					<p className="text-xl text-gray-500 text-center font-bold">
						{meses} Meses
					</p>
					<p className="text-xl text-gray-500 text-center font-bold">
						{MoneyFormat(total)} Total a pagar
					</p>
					<p className="text-xl text-gray-500 text-center font-bold">
						{' '}
						{MoneyFormat(pago)} Mesuales
					</p>
				</div>

				<button
					type="button"
					className="mt-10 block w-full rounded-full bg-green-500 px-6 py-3 text-center text-lg font-bold text-white shadow-lg transition duration-300 hover:bg-green-600"
				>
					Solícitalo Ya!
				</button>
			</div>
			<footer className="text-center mt-10">
				<p>
					Hecho con 💙 by {/*Cenitline by:{' '}*/}
					<span className={clsx('font-extrabold', theme.textBlue)}>
						wjuma19dev2026
					</span>
				</p>
				<p>2026 &copy; Todos los derechos reservados</p>
			</footer>
		</>
	)
}
