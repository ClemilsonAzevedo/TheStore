import { products } from '@/api/fakeProductsProps'
import { Product } from '@/components/Product'
import { Button } from '@/components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Headphones, Laptop, Smartphone, Watch } from 'lucide-react'

export function Home() {
	return (
		<section className='flex flex-col w-full space-y-10 pr-5 overflow-y-auto overflow-x-hidden'>
			<div className='flex flex-col justify-end items-center min-h-[550px] border-2 border-neutral-400 rounded-lg p-5'>
				<div className='my-auto flex w-full gap-5 max-lg:flex-col max-lg:justify-center max-lg:items-center'>
					<div className='grid grid-cols-[100px_100px] flex-wrap gap-5 w-[340px] h-[220px] flex-grow max-lg:grid-rows-1 max-lg:flex max-lg:h-full'>
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg mr-auto' />
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
					</div>

					<div className='flex-1 flex flex-col items-center justify-center gap-5'>
						<h1 className='text-4xl truncate font-bold'>
							Welcome to "THE STORE"
						</h1>
						<a href='#Home'>
							<Button
								type='button'
								className='w-[150px] py-2 bg-violet-500 text-neutral-50 font-medium text-sm hover:bg-violet-500/70 transition'>
								Continue
							</Button>
						</a>
					</div>

					<div className='flex gap-5 items-center justify-end flex-grow flex-wrap'>
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
					</div>
				</div>

				<div className='flex justify-between items-center w-full max-md:flex-col'>
					<a
						href='#Smartwatches'
						className='flex items-center gap-2 text-neutral-950 text-lg transition hover:text-violet-500/70'>
						<Watch /> Smartwatches
					</a>
					<a
						href='#Smartphones'
						className='flex items-center gap-2 text-neutral-950 text-lg transition hover:text-violet-500/70'>
						<Smartphone /> Smartphones
					</a>
					<a
						href='#Headphones'
						className='flex items-center gap-2 text-neutral-950 text-lg transition hover:text-violet-500/70'>
						<Headphones />
						Headphones
					</a>
					<a
						href='#Laptops'
						className='flex items-center gap-2 text-neutral-950 text-lg transition hover:text-violet-500/70'>
						<Laptop /> Laptops
					</a>
				</div>
			</div>

			<div id='Home' className='px-5 w-full'>
				<h3 className='font-semibold text-2xl mb-2 mr-auto'>Most Recent</h3>
				<div className='mx-auto w-[calc(100vw-250px)]'>
					<Carousel
						opts={{
							align: 'center',
							loop: false,
						}}>
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
			</div>

			<div id='Smartwatches' className='flex flex-col items-center gap-5'>
				<h2 className='flex gap-2 items-center text-2xl font-semibold sticky top-0 z-10 bg-neutral-50 w-full justify-center py-2'>
					<Watch size={32} />
					Smartwatches
				</h2>

				<div className='flex flex-wrap justify-center'>
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
				</div>
			</div>

			<div id='Smartphones' className='flex flex-col items-center gap-5'>
				<h2 className='flex gap-2 items-center text-2xl font-semibold sticky z-10 top-0 bg-neutral-50 w-full justify-center py-2'>
					<Smartphone size={32} /> Smartphones
				</h2>

				<div className='flex flex-wrap justify-center'>
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
				</div>
			</div>

			<div id='Headphones' className='flex flex-col items-center gap-5'>
				<h2 className='flex gap-2 items-center text-2xl font-semibold sticky z-10 top-0 bg-neutral-50 w-full justify-center py-2'>
					<Headphones size={32} />
					Headphones
				</h2>

				<div className='flex flex-wrap justify-center'>
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
				</div>
			</div>

			<div id='Laptops' className='flex flex-col items-center gap-5'>
				<h2 className='flex gap-2 items-center text-2xl font-semibold sticky top-0 z-10 bg-neutral-50 w-full justify-center py-2'>
					<Laptop size={32} />
					Laptops
				</h2>
				<div className='flex flex-wrap justify-center'>
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
				</div>
			</div>
		</section>
	)
}
