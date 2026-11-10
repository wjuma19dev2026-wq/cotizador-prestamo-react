import cenitlineLogo from '../../assets/cenitline-logo.png'

export const Header = ({ theme }) => {
	const { textBlue } = theme

	return (
		<>
			<div className="flex justify-center">
				<img
					src={cenitlineLogo}
					alt="cenitline logo"
					className="h-80"
				/>
			</div>
			<h1 className="text-4xl font-extrabold text-gray-500 text-center">
				Cuanto <span className={textBlue}>dinero</span> necesitas?
			</h1>
		</>
	)
}
