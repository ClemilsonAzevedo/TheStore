import {
	Figma,
	Github,
	Heart,
	Home,
	Settings,
	ShoppingBasket,
	ShoppingCart,
	Sun,
	User,
	UserPlus,
} from 'lucide-react'

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Login } from '../Login'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { SignUp } from '../SignUp'

export function Aside() {
	return (
		<aside className='flex h-full w-[50px] flex-col items-center justify-between py-5'>
			<div>
				<div className='bg-white relative rounded-full p-2 duration-300 hover:bg-neutral-400'>
					<span className='absolute right-1 top-2 h-[5px] w-[5px] rounded-full bg-violet-500' />
					<a href='/cart'>
						<ShoppingCart />
					</a>
				</div>
			</div>
			<div className='flex flex-col gap-5'>
				<div className='bg-white rounded-full p-2 duration-300 hover:bg-neutral-400'>
					<a href='/'>
						<Home />
					</a>
				</div>
				<div className='bg-white rounded-full p-2 duration-300 hover:bg-neutral-400'>
					<a href='/store'>
						<ShoppingBasket />
					</a>
				</div>
				<div className='bg-white rounded-full p-2 duration-300 hover:bg-neutral-400'>
					<a href='/loved'>
						<Heart />
					</a>
				</div>
			</div>
			<div className='flex flex-col gap-5'>
				<div className='flex items-center flex-col justify-center gap-2 w-full'>
					<Dialog>
						<DialogContent className='px-[9.375rem] py-5 border-neutral-600 bg-neutral-400 focus-visible:outline-none max-w-max'>
							<Login />
						</DialogContent>
						<DialogTrigger className='p-2 hover:bg-neutral-400 rounded-full focus-visible:outline-none transition'>
							<User size={24} />
						</DialogTrigger>
					</Dialog>

					<Dialog>
						<DialogContent className='px-[9.375rem] py-5 border-neutral-600 bg-neutral-400 focus-visible:outline-none max-w-max'>
							<SignUp />
						</DialogContent>
						<DialogTrigger className='p-2 hover:bg-neutral-400 rounded-full focus-visible:outline-none transition'>
							<UserPlus size={24} />
						</DialogTrigger>
					</Dialog>
				</div>

				<Popover>
					<PopoverTrigger asChild>
						<div className='bg-white rounded-full p-2 duration-300 hover:bg-neutral-400'>
							<Settings className='hover:rotate-90 transition' />

							<PopoverContent className='max-w-max ml-16 flex flex-col items-start gap-5 bg-neutral-50'>
								<div className='flex items-center right-0 justify-center w-full gap-2 p-1'>
									<span>
										<Sun />
									</span>
								</div>
								<a
									className='flex items-center gap-2 transition hover:text-violet-500 p-1'
									href='http://'
									target='_blank'
									rel='noopener noreferrer'>
									<Github size={20} />
									<span className='text-sm'>Repository</span>
								</a>
								<a
									className='flex items-center gap-2 transition hover:text-violet-500 p-1'
									href='http://'
									target='_blank'
									rel='noopener noreferrer'>
									<Figma size={20} />
									<span className='text-sm'>Design</span>
								</a>
							</PopoverContent>
						</div>
					</PopoverTrigger>
				</Popover>
			</div>
		</aside>
	)
}
