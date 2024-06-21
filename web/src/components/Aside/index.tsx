import {
	Figma,
	Github,
	Heart,
	Home,
	LogOut,
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
import { useAuth } from '@/context/authContext'
import { NavLink } from 'react-router-dom'
import { Login } from '../Login'
import { SignUp } from '../SignUp'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

export function Aside() {
	const { user, SignOut } = useAuth()

	return (
		<aside className='flex h-full w-[50px] flex-col items-center justify-between py-5'>
			<NavLink
				className='relative group p-2 rounded-full hover:bg-neutral-400 active:text-violet-500 '
				to='/cart'>
				<span className='absolute right-1 top-2 h-[5px] w-[5px] rounded-full bg-violet-500' />
				<ShoppingCart />
				<label className='hidden group-hover:block absolute left-10 top-0 transition bg-neutral-950 text-neutral-50 p-2 rounded-lg text-xs'>
					Cart
				</label>
			</NavLink>

			<nav className='flex flex-col gap-5'>
				<NavLink
					className='p-2 rounded-full hover:bg-neutral-400 active:text-violet-500 group relative'
					to={'/' || '#home'}>
					<Home />
					<label className='hidden group-hover:block absolute left-10 top-0 transition bg-neutral-950 text-neutral-50 p-2 rounded-lg text-xs'>
						home
					</label>
				</NavLink>
				<NavLink
					className='p-2 rounded-full hover:bg-neutral-400 active:text-violet-500 group relative'
					to='/store'>
					<ShoppingBasket />
					<label className='hidden group-hover:block absolute left-10 top-0 transition bg-neutral-950 text-neutral-50 p-2 rounded-lg text-xs'>
						Store
					</label>
				</NavLink>
				<NavLink
					className='p-2 rounded-full hover:bg-neutral-400 active:text-violet-500 group relative'
					to='/loved'>
					<Heart />
					<label className='hidden group-hover:block absolute left-10 top-0 transition bg-neutral-950 text-neutral-50 p-2 rounded-lg text-xs'>
						Loved
					</label>
				</NavLink>
			</nav>

			<div className='flex flex-col gap-5'>
				{user === null ? (
					<div className='flex items-center flex-col justify-center gap-2 w-full'>
						<Dialog>
							<DialogContent className='px-[9.375rem] py-5 border-neutral-600 bg-neutral-400 focus-visible:outline-none max-w-max'>
								<Login />
							</DialogContent>
							<DialogTrigger className='p-2 hover:bg-neutral-400 rounded-full focus-visible:outline-none transition group relative'>
								<User size={24} />
								<label className='hidden group-hover:block absolute left-10 top-0 transition bg-neutral-950 text-neutral-50 p-2 rounded-lg text-xs'>
									Login
								</label>
							</DialogTrigger>
						</Dialog>

						<Dialog>
							<DialogContent className='px-[9.375rem] py-5 border-neutral-600 bg-neutral-400 focus-visible:outline-none max-w-max'>
								<SignUp />
							</DialogContent>
							<DialogTrigger className='p-2 hover:bg-neutral-400 rounded-full focus-visible:outline-none transition group relative'>
								<UserPlus size={24} />
								<label className='hidden group-hover:block absolute left-10 top-0 transition bg-neutral-950 text-neutral-50 p-2 rounded-lg text-xs  text-nowrap'>
									Sign Up
								</label>
							</DialogTrigger>
						</Dialog>
					</div>
				) : (
					<button
						type='button'
						onClick={SignOut}
						className='p-2 rounded-full hover:bg-neutral-400 active:text-violet-500 group relative'>
						<LogOut size={24} />
						<label className='hidden group-hover:block absolute left-10 top-0 transition bg-neutral-950 text-neutral-50 p-2 rounded-lg text-xs'>
							Logout
						</label>
					</button>
				)}

				<Popover>
					<PopoverTrigger asChild>
						<div className='rounded-full p-2 duration-300 hover:bg-neutral-400 transition group relative'>
							<Settings className='hover:rotate-90 transition' />
							<label className='hidden group-hover:block absolute left-10 top-0 transition bg-neutral-950 text-neutral-50 p-2 rounded-lg text-xs'>
								Settings
							</label>
						</div>
					</PopoverTrigger>

					<PopoverContent className='max-w-max ml-16 flex flex-col items-start gap-5 bg-neutral-50'>
						<div className='flex items-center right-0 justify-center w-full gap-2 p-1'>
							<span>
								<Sun />
							</span>
						</div>
						<a
							className='flex items-center gap-2 transition hover:text-violet-500 p-1'
							href='https://github.com/clemilsonAzevedo/TheStore/'
							target='_blank'
							rel='noopener noreferrer'>
							<Github size={20} />
							<span className='text-sm'>Repository</span>
						</a>
						<a
							className='flex items-center gap-2 transition hover:text-violet-500 p-1'
							href='https://www.figma.com/file/WHtAEKZFjBcS5sYiieO5ne/The-Store?type=design&node-id=4%3A2&mode=design&t=2VoTsVIV9rkgO9HD-1'
							target='_blank'
							rel='noopener noreferrer'>
							<Figma size={20} />
							<span className='text-sm'>Design</span>
						</a>
					</PopoverContent>
				</Popover>
			</div>
		</aside>
	)
}
