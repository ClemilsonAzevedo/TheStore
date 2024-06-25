import type { ProductInterface } from '@/@types/ProductInterface'
import { storeApi } from '@/api/store-api'
import { Product } from '@/components/Product'
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { formatUSD } from '@/utils/formatToUSD'
import {
	CalendarDays,
	Check,
	Heart,
	Loader2,
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

	return (
		<section className='p-5 overflow-y-auto overflow-x-hidden w-full'>
			{isProductsLoading ? (
				<div className='flex h-full w-full items-center justify-center'>
					<Loader2
						size={64}
						className='animate-spin repeat-infinite transition'
					/>
				</div>
			) : (
				<div className='flex gap-5'>
					<div className='max-w-[400px] flex flex-col gap-5 items-center'>
						<div className='border border-neutral-600 rounded-lg px-2 flex items-center justify-center w-[400px] h-[400px]'>
							<img
								src={productFoundById?.image}
								alt={productFoundById?.name}
								width={'100%'}
							/>
						</div>
						<div className='flex justify-between items-center w-full text-2xl font-semibold leading-none'>
							<h5>Price</h5>
							<span>{formatUSD(Number(productFoundById?.price))}</span>
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
								className='p-3 bg-violet-500 text-neutral-50 rounded-lg flex items-center justify-center hover:bg-violet-500/70 transition'>
								<Heart />
							</button>
						</div>
					</div>

					<div className='mt-5 flex flex-col gap-5'>
						<div className='flex items-center gap-5'>
							<h3 className='text-4xl font-bold'>{productFoundById?.name}</h3>
							<span className='text-neutral-50 bg-violet-500 p-2 rounded-lg hover:bg-violet-500/90'>
								#onStock
							</span>
						</div>

						<div className='border border-neutral-600 p-2 rounded-lg flex w-max items-center gap-2'>
							<Minus className='size-5 text-neutral-600 hover:text-neutral-950 transition' />
							<span>01</span>
							<Plus className='size-5 text-neutral-600 hover:text-neutral-950 transition' />
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
								{productFoundById?.description}
							</p>
						</div>
					</div>
				</div>
			)}

			{/*
				TODO: Criar filtro para produtos mais relevantes do mesmo tipo ou algo parecido
			*/}
		</section>
	)
}
