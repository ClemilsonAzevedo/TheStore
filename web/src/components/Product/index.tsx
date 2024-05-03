import { Heart, Plus } from 'lucide-react'
import { useState } from 'react'
import pcImage from '../../assets/MacbookProM1Pro.png'
import { Button } from '../ui/button'
import { ProductInterface } from '@/@types/ProducInterface'

interface ProductProps extends ProductInterface {}

export function Product({
	name,
	description,
	price,
	isLiked = false,
	image = pcImage,
}: ProductProps) {
	const [isProductLiked, setIsProductLiked] = useState(isLiked)

	function handleLikeProduct() {
		setIsProductLiked(!isProductLiked)
		isLiked = isProductLiked
	}

	return (
		<div className='hover:bg-neutral-400 transition duration-300  rounded-lg px-5 hover:scale-110'>
			<div className='flex flex-col gap-5 py-5 max-w-48 justify-center items-center'>
				<div className='flex flex-col bg-neutral-400 w-max p-4 rounded-lg'>
					<button
						onClick={handleLikeProduct}
						type='button'
						className={
							!isProductLiked
								? 'flex items-center justify-center ml-auto -mr-2 -mt-2 bg-neutral-50 p-1 rounded-full cursor-pointer focus:outline-none focus:ring-0 ease-in-out hover:scale-110 transition'
								: 'flex items-center justify-center ml-auto -mr-2 -mt-2 bg-violet-500 p-1 rounded-full cursor-pointer text-neutral-50 focus:outline-none focus:ring-0 repeat-1 duration-300 animate-in ease-in-out scale-125'
						}
					>
						<Heart className='flex-1' size={16} />
					</button>
					<img src={image} alt='' />
				</div>
				<div className='w-full'>
					<h4 className='font-medium text-base text-neutral-950 text-center text-ellipsis truncate'>
						{name}
					</h4>{' '}
					<p className='mt-4 text-[0.625rem] text-neutral-600 text-justify h-11 truncate text-wrap'>
						{description}
					</p>
				</div>
				<div className='flex w-full justify-between items-center'>
					<span className='text-neutral-950 font-medium text-base'>
						{price}
					</span>
					<Button
						className='bg-violet-500 text-neutral-50 p-2 rounded-lg hover:bg-violet-500/70 transition'
						type='button'
					>
						<Plus size={24} />
					</Button>
				</div>
			</div>
		</div>
	)
}
