import { Button } from '@/components/ui/button'
import { Headphones, Laptop, Smartphone, Watch } from 'lucide-react'

export function Home() {
	return (
		<section className='flex flex-col w-full gap-5 pr-5'>
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
					<span className='flex items-center gap-2 text-neutral-950 text-lg transition'>
						<Watch /> Smartwatches
					</span>
					<span className='flex items-center gap-2 text-neutral-950 text-lg transition'>
						<Smartphone /> Smartphones
					</span>
					<span className='flex items-center gap-2 text-neutral-950 text-lg transition'>
						<Headphones />
						Headphones
					</span>
					<span className='flex items-center gap-2 text-neutral-950 text-lg transition'>
						<Laptop /> Laptops
					</span>
				</div>
			</div>

			<div>Most Recent</div>

			<div>Most Sell</div>
		</section>
	)
}
