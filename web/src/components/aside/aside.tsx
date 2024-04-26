import {
	Heart,
	Home,
	Settings,
	ShoppingBasket,
	ShoppingCart,
	User,
} from 'lucide-react'

export default function Aside() {
	return (
		<aside className='flex h-full w-[50px] flex-col items-center justify-between py-5'>
			<div>
				<div className='bg-white relative rounded-full p-2 duration-300 hover:bg-neutral-400'>
					<span className='absolute right-1 top-2 h-[5px] w-[5px] rounded-full bg-violet-500' />
					<a href="/cart">
						<ShoppingCart />
					</a>
				</div>
			</div>
			<div className='flex flex-col gap-5'>
				<div className='bg-white rounded-full p-2 duration-300 hover:bg-neutral-400'>
					<a href="/">
						<Home />
					</a>
				</div>
				<div className='bg-white rounded-full p-2 duration-300 hover:bg-neutral-400'>
					<a href="/loved">
						<Heart />
					</a>
				</div>
				<div className='bg-white rounded-full p-2 duration-300 hover:bg-neutral-400'>
					<a href="/products">
						<ShoppingBasket />
					</a>
				</div>
			</div>
			<div className='flex flex-col gap-5'>
				<div className='bg-white rounded-full p-2 duration-300 hover:bg-neutral-400'>
					<User />
				</div>
				<div className='bg-white rounded-full p-2 duration-300 hover:bg-neutral-400'>
					<Settings />
				</div>
			</div>
		</aside>
	)
}
