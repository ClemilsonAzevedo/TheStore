import { Heart, Plus } from 'lucide-react'
import pcImage from '../../assets/MacbookProM1Pro.png'

export function Product() {
	return (
		<div className='hover:bg-neutral-400 transition duration-300  rounded-lg px-5 hover:scale-110'>
			<div className='flex flex-col gap-5 py-5 max-w-48 justify-center items-center'>
				<div className='flex flex-col bg-neutral-400 w-max p-4 rounded-lg'>
					<div className='flex items-center justify-center ml-auto -mr-2 -mt-2 bg-neutral-50 p-1 rounded-full cursor-pointer'>
						<Heart className='flex-1' size={16} />
					</div>
					<img src={pcImage} alt='Macbook Pro' />
				</div>
				<div>
					<h4 className='font-medium text-base text-neutral-950'>
						Apple Macbook Pro
					</h4>{' '}
					<p className='mt-4 text-[0.625rem] text-neutral-600 text-justify h-11 truncate text-wrap'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit cleinsdjk
						sklamnimdii sksnakjk dpkmidi didincn
					</p>
				</div>
				<div className='flex w-full justify-between items-center'>
					<span className='text-neutral-950 font-medium text-base'>
						$ 1.838,69
					</span>
					<button
						className='bg-violet-500 text-neutral-50 p-2 rounded-lg hover:bg-violet-500/70 transition'
						type='button'
					>
						<Plus size={24} />
					</button>
				</div>
			</div>
		</div>
	)
}
