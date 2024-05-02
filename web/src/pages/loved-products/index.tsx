export function LovedProducts() {
	return (
		<section className='flex flex-wrap gap-5 py-5 justify-center flex-1 overflow-auto'>
			{Array.from({ length: 40 }).map(() => {
				return (
					<div
						key={Array.length + 1}
						className='border shadow min-w-[400px] min-h-[400px] hover:bg-neutral-400 hover:scale-105 transition duration-200 rounded-lg'
					/>
				)
			})}
		</section>
	)
}
