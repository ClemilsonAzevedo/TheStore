import { products } from '@/api/fakeProductsProps'
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from '@/components/ui/command'
import { Search } from 'lucide-react'
import { type KeyboardEvent, useEffect, useState } from 'react'

interface typeProductProps {
	type: 'laptop' | 'headphone' | 'smartphone' | 'smartwatch'
}

export function Header() {
	const [open, setOpen] = useState(false)

	const typeOfProcuts: typeProductProps[] = [
		{ type: 'laptop' },
		{ type: 'headphone' },
		{ type: 'smartphone' },
		{ type: 'smartwatch' },
	]

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen(open => !open)
			}
		}
		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	return (
		<>
			<header className='flex items-center justify-center p-5'>
				<button
					type='button'
					className='group flex items-center h-full w-full max-w-[350px] border-2 border-neutral-600 rounded-lg p-2 hover:border-violet-500 hover:bg-neutral-400/70 transition focus-within:ring-1 focus:border-violet-500 '
					onClick={open ? () => setOpen(false) : () => setOpen(true)}>
					<Search
						size={20}
						className='text-neutral-600 group-hover:text-neutral-950 transition'
					/>
					<span className='flex-1 flex pl-2 text-neutral-600 '>
						You will search here ...
					</span>
					<kbd className='pointer-events-none inline-flex select-none items-center rounded-lg border bg-neutral-400 group-hover:bg-violet-500 group-hover:text-neutral-50 transition px-1.5 py-px font-mono text-[10px] font-medium text-neutral-600 '>
						<span className='text-sm bg-transparent'>Ctrl + K</span>
					</kbd>
				</button>
			</header>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<Command className='flex items-center w-[400px] rounded-full bg-neutral-400 focus-within:ring-1 focus-within:ring-violet-500'>
					<CommandInput
						id='search'
						list='search-suggestions'
						className='bg-transparent border-0 outline-none h-7 shadow-none focus:border-0 placeholder:text-neutral-600 flex-1'
						placeholder='Type for filter an product'
					/>
				</Command>

				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					{typeOfProcuts.map(product => (
						<CommandGroup key={product.type} heading={product.type}>
							{products
								.filter(item => item.type === product.type)
								.map(item => (
									<CommandItem key={item.id}>{item.name}</CommandItem>
								))}
						</CommandGroup>
					))}
				</CommandList>
			</CommandDialog>
		</>
	)
}
