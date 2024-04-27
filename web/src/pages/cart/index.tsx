import { Button } from '@/components/ui/button'
import {
	TableRow,
	TableHead,
	Table,
	TableBody,
	TableCell,
	TableHeader,
} from '@/components/ui/table'

const invoices = [
	{
		uuid: '6v33a3fa',
		quantity: 2,
	},
	{
		uuid: '8s78a3fa',
		quantity: 3,
	},
	{
		uuid: 'x078kcfa',
		quantity: 2,
	},
	{
		uuid: '2071ksofa',
		quantity: 1,
	},
	{
		uuid: 'a878als0',
		quantity: 1,
	},
	{
		uuid: 'c1723ksfa',
		quantity: 2,
	},
	{
		uuid: '9933axpa',
		quantity: 6,
	},
]

export function Cart() {
	return (
		<section className='w-full flex gap-5 p-5'>
			<div className='w-full border'>
				<div>clema</div>
				<div>clema</div>
				<div>clema</div>
			</div>

			<div className='border min-w-[429px] h-full p-5 flex flex-col justify-between'>
				<div className='flex flex-col gap-5 justify-start'>
					<h4 className='text-xl '>You`re paying:</h4>
					<h2 className='text-4xl font-bold text-center'>$ 15,329.06</h2>
					<Table className='mt-12'>
						<TableHeader>
							<TableRow>
								<TableHead className='font-medium text-neutral-950 text-lg'>
									Total items:
								</TableHead>
								<TableHead className='font-medium text-right text-neutral-950 text-base'>
									17
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{invoices.map(invoice => (
								<TableRow
									className='border-none rounded-lg '
									key={invoice.uuid}
								>
									<TableCell className='text-sm'>{invoice.uuid}</TableCell>
									<TableCell className='text-right text-sm'>
										{invoice.quantity}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>

				<Button className='bg-violet-500 w-36 mx-auto hover:bg-violet-500/70'>
					Pay
				</Button>
			</div>
		</section>
	)
}
