export const Header = ({ theme }) => {
	const { textBlue } = theme

	return (
		<h1 className="text-4xl font-extrabold text-gray-500 text-center">
			Cuanto <span className={textBlue}>dinero</span> necesitas?
		</h1>
	)
}
