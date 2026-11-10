import { clsx } from 'cn'

export const Button = ({ queryFn, content }) => {
	return (
		<button
			onClick={queryFn}
			className={clsx(
				'h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-yellow-800/60 rounded-full hover:outline-none hover:cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-yellow-800/50',
			)}
		>
			{content}
		</button>
	)
}
