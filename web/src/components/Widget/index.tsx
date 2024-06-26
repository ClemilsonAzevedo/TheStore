import { WidgetForm } from './WidgetForm'

import { MessageCircleMore } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

export function Widget() {
	return (
		<div className='fixed bottom-4 right-4 z-40'>
			<Popover>
				<PopoverContent className='bg-transparent shadow-none border-0 w-full'>
					<WidgetForm />
				</PopoverContent>
				<PopoverTrigger className='bg-violet-500 rounded-full px-3 h-12 text-neutral-50 flex justify-center items-center group focus-visible:outline-none'>
					<MessageCircleMore className='size-6 text-neutral-50' />
					<span className='text-neutral-50 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear text-sm'>
						Feedback
					</span>
				</PopoverTrigger>
			</Popover>
		</div>
	)
}
