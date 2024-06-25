import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface NavigationLinkProps {
	title: string
	path: string
	icon: ReactNode
}

export function NavigationLink({ icon, path, title }: NavigationLinkProps) {
	return (
		<NavLink
			className={({ isActive }) =>
				isActive
					? 'p-2 rounded-full hover:bg-neutral-400 text-violet-500 group relative'
					: 'p-2 rounded-full hover:bg-neutral-400 group relative'
			}
			to={path}>
			{icon}
			<label className='hidden group-hover:block absolute left-10 top-0 transition bg-neutral-950 text-neutral-50 p-2 rounded-lg text-xs'>
				{title}
			</label>
		</NavLink>
	)
}
