import type { ProductInterface } from '@/@types/ProductInterface'
import pcImage from '../../assets/MacbookProM1Pro.png'

interface ProductProps extends ProductInterface {}

export function DestacProduct({ name, price, image = pcImage }: ProductProps) {
	return (
		<div className='border-2 min-w-max rounded-lg p-5 transition hover:scale-110 hover:bg-neutral-400 cursor-pointer'>
			<div className='flex flex-col gap-5 justify-center items-center'>
				<div className='flex flex-col h-full'>
					<img src={image} alt='' loading='lazy' className='w-80 h-auto  ' />
				</div>
				<h4 className='font-medium text-xl text-neutral-950 text-center text-ellipsis truncate'>
					{name}
				</h4>
				<span className='text-neutral-950 font-semibold text-2xl'>{price}</span>
			</div>
		</div>
	)
}
