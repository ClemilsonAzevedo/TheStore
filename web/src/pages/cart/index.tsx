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
			<div className='w-full flex gap-5 h-[150px]'>
				<div className='border border-neutral-400 rounded-lg min-w-[350px] h-full flex flex-col p-5 gap-2'>
					<h3 className='font-medium text-xl'>Your Cart</h3>
					<p className='text-sm '>
						This page apresent all your orders for create new order click on
						button in this card
					</p>
					<a
						href='/products'
						className='py-2 w-[106px] text-[10px] bg-violet-500 flex items-center justify-center text-neutral-50 rounded-lg ml-auto hover:bg-violet-500/70 transition'
					>
						Add new product
					</a>
				</div>

				<div className='border border-neutral-400 rounded-lg min-w-[200px] h-full p-5 flex flex-col justify-end items-center'>
					<span className='text-4xl font-bold mx-auto'>{invoices.length}</span>
					<p className='text-sm mt-8'>Products Quatity</p>
				</div>

				<div className='border p-5 border-neutral-400 rounded-lg w-full h-full flex flex-col justify-between items-start'>
					<span className='text-xl font-medium'>Total</span>
					<p className='text-sm flex items-center gap-3'>
						All products are under
						<span className='text-2xl font-semibold'>$15,329</span>
					</p>
				</div>
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
									{invoices.length}
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

				<Button className='bg-violet-500 w-36 mx-auto hover:bg-violet-500/70 focus-visible:ring-0'>
					Pay
				</Button>
			</div>
		</section>
	)
}
