import { Aside } from '@/components/Aside'
import { Header } from '@/components/Header'
import { Widget } from '@/components/Widget'
import { Outlet } from 'react-router-dom'

export function LayoutDefault() {
	return (
		<section className='min-h-screen'>
			<Header />
			<div className='h-[calc(100vh-76px)] flex relative max-w-full overflow-y-hidden'>
				<Aside />
				<Widget />
				<Outlet />
			</div>
		</section>
	)
}
