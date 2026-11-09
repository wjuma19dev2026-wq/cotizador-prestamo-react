// @ts-check

/**
 * Calcular el total a pagar segun cantidad y plazo
 * @param  { number } cantidad Monto a calcular
 * @param  { number } plazo    Tiempo de duracion a pagar
 * @returns { number }          Devuelve la cantidad a pagar segun plazo
 */
export const CalcTotalPagar = (cantidad, plazo) => {
	let total

	if (cantidad < 5000) {
		total = cantidad * 1.5
	} else if (cantidad >= 5000 && cantidad < 10000) {
		total = cantidad * 1.4
	} else if (cantidad >= 10000 && cantidad < 15000) {
		total = cantidad * 1.3
	} else {
		total = cantidad * 1.2
	}

	if (plazo === 6) {
		total *= 1.1
	} else if (plazo === 12) {
		total *= 1.2
	} else {
		total *= 1.3
	}

	return total
}
