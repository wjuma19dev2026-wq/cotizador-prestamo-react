export const Range = ({ cantidad, handleChange }) => {
	return (
		<input
			step={100}
			min={0}
			max={20000}
			value={cantidad}
			onChange={handleChange}
			type="range"
			className="mt-5 w-full bg-gray-200 accent-yellow-700/60 hover:accent-yellow-700/80 hover:cursor-pointer"
		/>
	)
}
