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

export function Header() {
	const [open, setOpen] = useState(false)

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
				<div className='flex items-center h-full w-full max-w-[400px] border border-neutral-600 rounded-lg p-2 focus-within:ring-1 focus-within:ring-violet-500 '>
					<Search />
					<input
						list='all-suggestions'
						type='search'
						className=' flex-1 focus-visible:outline-none'
					/>
					<kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground '>
						<span className='text-sm bg-transparent'>Ctrl + K</span>
					</kbd>

					<datalist id='all-suggestions'>
						{products.map(product => (
							<option key={product.id} value={product.name}>
								{product.name}
							</option>
						))}
					</datalist>
				</div>
			</header>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<Command className='flex items-center w-[400px] rounded-full bg-neutral-400 focus-within:ring-1 focus-within:ring-violet-500 focus-within:fill-neutral-950'>
					<CommandInput
						id='search'
						list='search-suggestions'
						className='bg-transparent border-0 outline-none h-7 shadow-none focus:border-0 placeholder:text-neutral-600 flex-1'
						placeholder='You will search here ...'
					/>
				</Command>

				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					{products.map(product => (
						<CommandItem key={product.id} value={product.name}>
							{product.name}
						</CommandItem>
					))}
				</CommandList>
			</CommandDialog>
		</>
	)
}
