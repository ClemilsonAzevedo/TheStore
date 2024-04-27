import { Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	TableRow,
	TableHead,
	Table,
	TableBody,
	TableCell,
	TableHeader,
} from '@/components/ui/table'

const products = [
	{
		id: 'd859cc47',
		name: 'Macbook Pro M1 Pro 16gb',
		quantity: 2,
		unitPrice: 2499.99,
		amount: 4999.98,
	},
	{
		id: 'espocc47',
		name: 'Macbook Air M1 8gb',
		quantity: 1,
		unitPrice: 999.99,
		amount: 2999.97,
	},
	{
		id: 'd859qpwo',
		name: 'iMac 27" Retina 5K 2021',
		quantity: 2,
		unitPrice: 1799.99,
		amount: 3599.98,
	},
	{
		id: 'v123ldsk',
		name: 'Mac Mini M1 8gb',
		quantity: 1,
		unitPrice: 699.99,
		amount: 699.99,
	},
	{
		id: '4lskdpcm',
		name: 'Macbook Pro 13" M1 8gb',
		quantity: 1,
		unitPrice: 1299.99,
		amount: 1299.99,
	},
	{
		id: 'c2k3sjd0',
		name: 'iMac 24" M1 8gb',
		quantity: 2,
		unitPrice: 1299.99,
		amount: 2599.98,
	},
	{
		id: '0clsiw8',
		name: 'Mac Pro (2019)',
		quantity: 2,
		unitPrice: 5999.99,
		amount: 35999.94,
	},
]

const totalAmount = products
	.reduce((acc, curr) => acc + curr.amount, 0)
	.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
const totalQuantity = products.reduce((acc, curr) => acc + curr.quantity, 0)

export function Cart() {
	return (
		<section className='w-full flex gap-5 p-5'>
			<div className='w-full flex flex-col gap-5'>
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
						<span className='text-4xl font-bold mx-auto'>{totalQuantity}</span>
						<p className='text-sm mt-8'>Products Quatity</p>
					</div>
					<div className='border p-5 border-neutral-400 rounded-lg w-full h-full flex flex-col justify-between items-start'>
						<span className='text-xl font-medium'>Total</span>
						<p className='text-sm flex items-center gap-3'>
							All products are under
							<span className='text-2xl font-semibold'>{totalAmount}</span>
						</p>
					</div>
				</div>

				<div className='flex flex-col gap-5'>
					<div className='flex items-center gap-2 border w-[350px] py-2 pl-5 rounded-lg'>
						<Filter size={24} />
						<Input
							placeholder='Filter name...'
							className='border-none shadow-none outline-none placeholder:text-sm placeholder:text-neutral-400 text-sm'
						/>
					</div>

					<div className='border rounded-lg'>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className='text-sm text-neutral-950 text-center'>
										Id
									</TableHead>
									<TableHead className='text-sm text-neutral-950'>
										Name
									</TableHead>
									<TableHead className='text-sm text-neutral-950'>
										QTD
									</TableHead>
									<TableHead className='text-sm text-neutral-950'>
										Uni. Price
									</TableHead>
									<TableHead className='text-sm text-neutral-950'>
										Amount
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{products.map(product => (
									<TableRow key={product.id}>
										<TableCell className='text-center'>{product.id}</TableCell>
										<TableCell>{product.name}</TableCell>
										<TableCell>{product.quantity}</TableCell>
										<TableCell>{product.unitPrice}</TableCell>
										<TableCell>{product.amount}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</div>
			</div>

			<div className='border rounded-lg min-w-[429px] h-full p-5 flex flex-col justify-between'>
				<div className='flex flex-col gap-5 justify-start'>
					<h4 className='text-xl '>You`re paying:</h4>
					<h2 className='text-4xl font-bold text-center'>{totalAmount}</h2>
					<Table className='mt-12'>
						<TableHeader>
							<TableRow>
								<TableHead className='font-medium text-neutral-950 text-lg'>
									Total items:
								</TableHead>
								<TableHead className='font-medium text-right text-neutral-950 text-base'>
									{totalQuantity}
								</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{products.map(product => (
								<TableRow className='border-none rounded-lg ' key={product.id}>
									<TableCell className='text-sm'>{product.id}</TableCell>
									<TableCell className='text-right text-sm'>
										{product.quantity}
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
