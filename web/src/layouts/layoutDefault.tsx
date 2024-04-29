import { Widget } from '@/components/Widget'
import { Aside } from '@/components/Aside'
import { Header } from '@/components/Header'

export default function LayoutDefault({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section className='min-h-screen '>
			<Header />
			<div className='h-[calc(100vh-76px)] flex relative'>
				<Aside />
				{children}
				<Widget />
			</div>
		</section>
	)
}
