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
		<section className='flex flex-col w-full gap-5 pr-5 overflow-y-auto'>
			<div className='flex flex-col justify-end items-center min-h-[550px] border-2 border-neutral-400 rounded-lg p-5'>
				<div className='my-auto flex w-full'>
					<div className='flex flex-wrap gap-5 max-w-[220px] h-[220px]'>
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
					</div>

					<div className='flex-1 flex flex-col items-center justify-center gap-5'>
						<h1 className='text-4xl truncate font-bold'>
							Welcome to "THE STORE"
						</h1>
						<Button
							type='button'
							className='w-[150px] py-2 bg-violet-500 text-neutral-50 font-medium text-sm hover:bg-violet-500/70 transition'>
							Continue
						</Button>
					</div>

					<div className='flex gap-5 items-center'>
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
						<div className='w-[100px] h-[100px] bg-neutral-400 rounded-lg' />
					</div>
				</div>

				<div className='flex justify-between items-center w-full'>
					<span className='flex items-center gap-2 text-neutral-950 text-lg transition hover:text-violet-500/70'>
						<Watch /> Smartwatches
					</span>
					<span className='flex items-center gap-2 text-neutral-950 text-lg transition hover:text-violet-500/70'>
						<Smartphone /> Smartphones
					</span>
					<span className='flex items-center gap-2 text-neutral-950 text-lg transition hover:text-violet-500/70'>
						<Headphones />
						Headphones
					</span>
					<span className='flex items-center gap-2 text-neutral-950 text-lg transition hover:text-violet-500/70'>
						<Laptop /> Laptops
					</span>
				</div>
			</div>

			<div className='flex items-start justify-center h-full flex-col px-5'>
				<h3 className='font-semibold text-2xl'>Most Recent</h3>
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

			<div className='flex items-start justify-center h-full flex-col px-5 my-5'>
				<h3 className='font-semibold text-2xl'>Most Sells</h3>
				<Carousel
					opts={{
						align: 'center',
						loop: true,
						slidesToScroll: 'auto',
					}}
					className='w-full max-w-screen-xl h-full  mx-auto'>
					<CarouselContent>
						{Array.from({ length: 20 }).map((_, index) => (
							<Product
								key={length}
								price='$ 1,999.39'
								onCart={false}
								isLiked={false}
								name='Macbook Pro'
								description='a short description to this pc with 8gb of ram 256gb ssd dknidn bla blab bla bla bla bla balbkla bla bla bakbaiabaia'
							/>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	)
}
