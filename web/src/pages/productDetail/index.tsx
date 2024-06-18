import type { ProductInterface } from '@/@types/ProductInterface'
import { storeApi } from '@/api/store-api'
import { Product } from '@/components/Product'
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import {
	CalendarDays,
	Check,
	Heart,
	Minus,
	Plus,
	ShoppingCart,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function ProductDetail() {
	const [products, setProducts] = useState<ProductInterface[]>([])
	const [isProductsLoading, setIsProductsLoading] = useState(false)

	useEffect(() => {
		setIsProductsLoading(true)
		storeApi
			.get('/products')
			.then(response => {
				setProducts(response.data)
			})
			.finally(() => setIsProductsLoading(false))
	}, [])

	const { productId } = useParams()
	const productFoundById = products.find(product => product.id === productId)

	if (!productFoundById) {
		return <div className='flex items-center justify-center text-3xl w-full font-bold'>Product not found</div>
	}

	return (
		<section className='p-5 overflow-y-auto'>
			<div className='flex gap-5'>
				<div className='max-w-[400px] flex flex-col gap-5 items-center'>
					<div className='border border-neutral-600 rounded-lg px-2 flex items-center justify-center w-[400px] h-[400px]'>
						<img src={pcImage} alt='' width={'100%'} />
					</div>
					<div className='flex justify-between items-center w-full text-2xl font-semibold leading-none'>
						<h5>Price</h5>
						<span>2.399$</span>
					</div>
					<div className='flex w-full justify-between gap-5'>
						<button
							type='button'
							className='flex-1 gap-2 bg-violet-500 text-neutral-50 rounded-lg flex items-center justify-center hover:bg-violet-500/70 transition'>
							<ShoppingCart />
							Add to cart
						</button>
						<button
							type='button'
							className='w-16 h-16 bg-violet-500 text-neutral-50 rounded-lg flex items-center justify-center hover:bg-violet-500/70 transition'>
							<Heart />
						</button>
					</div>
				</div>

				<div className='mt-5 flex flex-col gap-5'>
					<div className='flex items-center gap-5'>
						<h3 className='text-4xl font-bold'>Apple Macbook Pro</h3>
						<span className='text-neutral-50 bg-violet-500 p-2 rounded-lg hover:bg-violet-500/90'>
							#onStock
						</span>
					</div>
					<div className='flex gap-5'>
						<div className='border focus-within:ring-violet-500 focus-within:ring-1 rounded-lg w-36 h-11 flex items-center justify-center'>
							<select
								name='Processor'
								id='processor'
								className='outline-none w-full px-6 py-3 bg-transparent'>
								<option value='M1'>M1</option>
								<option value='M1P'>M1 Pro</option>
								<option value='M1M'>M1 Max</option>
								<option value='M2'>M2</option>
								<option value='M2P'>M2 Pro</option>
								<option value='M2M'>M2 Max</option>
								<option value='M3'>M3</option>
								<option value='M3P'>M3 Pro</option>
								<option value='M3M'>M3 Max</option>
							</select>
						</div>

						<div className='border focus-within:ring-violet-500 focus-within:ring-1 rounded-lg w-36 h-11 flex items-center justify-center'>
							<select
								name='RAM Memory'
								id='ram-memory'
								className='outline-none w-full px-6 py-3 bg-transparent'>
								<option value='8gb'>8GB</option>
								<option value='16gb'>16GB</option>
								<option value='32gb'>32GB</option>
								<option value='64gb'>64GB</option>
							</select>
						</div>

						<div className='border focus-within:ring-violet-500 focus-within:ring-1 rounded-lg w-36 h-11 flex items-center justify-center'>
							<select
								name='SSD Memory'
								id='ssd-memory'
								className='outline-none w-full px-6 py-3 bg-transparent'>
								<option value='128gb'>128GB</option>
								<option value='256gb'>256GB</option>
								<option value='512gb'>512GB</option>
							</select>
						</div>
					</div>

					<div className='flex space-x-5 items-center'>
						<div className='border border-neutral-600 p-2 rounded-lg flex items-center gap-2'>
							<Minus className='size-5 text-neutral-600 hover:text-neutral-950 transition' />
							<span>02</span>
							<Plus className='size-5 text-neutral-600 hover:text-neutral-950 transition' />
						</div>
						<div className='w-5 h-5 rounded-full bg-neutral-950' />
						<div className='w-5 h-5 rounded-full bg-neutral-600' />
						<div className='w-5 h-5 rounded-full  bg-violet-500' />
					</div>

					<div className='text-sm space-y-5'>
						<div className='flex gap-2'>
							<div className='border-2 bg-neutral-400 text-violet-500 border-violet-500 rounded w-6 h-6 bg flex items-center justify-center'>
								<Check size={16} />
							</div>
							For Delivery
						</div>
						<div className='flex gap-2 items-center'>
							<CalendarDays className='text-violet-500' />
							<div className='flex flex-col gap-1'>
								Return Delivery
								<span className='text-[0.625rem] text-neutral-600'>
									Free 30days Delivery Returns
								</span>
							</div>
						</div>
					</div>

					<div className='space-y-2'>
						<h4 className='text-2xl font-semibold'>Description</h4>
						<p className='pl-5 text-justify min-h-full flex-1 w-full'>
							Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
				</div>
			</div>

			<div className='mt-16'>
				<h3 className='text-2xl font-semibold'>More Relevant Products</h3>
				<Carousel
					opts={{
						align: 'center',
						loop: true,
						slidesToScroll: 'auto',
					}}
					className='w-full max-w-screen-xl h-full  mx-auto'>
					<CarouselContent>
						{products.map(product => {
							return (
								<Product
									key={product.id}
									id={product.id}
									price={product.price}
									onCart={product.onCart}
									isLiked={product.isLiked}
									name={product.name}
									description={product.description}
								/>
							)
						})}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	)
}
