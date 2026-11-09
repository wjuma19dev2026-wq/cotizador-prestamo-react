export const Range = ({ cantidad, handleChange }) => {
	return (
		<input
			step={100}
			min={0}
			max={20000}
			value={cantidad}
			onChange={handleChange}
			type="range"
			className="mt-5 w-full bg-gray-200 accent-lime-500 hover:accent-lime-600 hover:cursor-pointer"
		/>
	)
}
