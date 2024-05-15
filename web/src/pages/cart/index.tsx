import { products } from '@/api/fakeProductsProps'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import {
	totalAmount,
	totalQuantity,
} from '@/utils/calculeQuantityAndAmountProducts'
import { formatUSD } from '@/utils/formatToUSD'
import { Filter } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Cart() {
	const [onCartProducts, setOnCartProducts] = useState(
		products.filter(product => product.onCart),
	)

	useEffect(() => {
		setOnCartProducts(products.filter(product => product.onCart))
	}, [products])

	return (
		<section className='w-full flex overflow-y-auto gap-5 p-5 max-xl:flex-wrap max-xl:justify-center'>
			<div className='w-full flex flex-col gap-5'>
				<div className='w-full flex gap-5 h-[150px]'>
					<div className='border border-neutral-400 rounded-lg min-w-[350px] h-full flex flex-col p-5 gap-2'>
						<h3 className='font-medium text-xl'>Your Cart</h3>
						<p className='text-sm '>
							This page apresent all your orders for create new order click on
							button in this card
						</p>
						<a
							href='/store'
							className='py-2 w-[106px] text-[10px] bg-violet-500 flex items-center justify-center text-neutral-50 rounded-lg ml-auto hover:bg-violet-500/70 transition'>
							Add new product
						</a>
					</div>
					<div className='border border-neutral-400 rounded-lg min-w-[200px] h-full p-5 flex flex-col justify-end items-center'>
						<span className='text-4xl font-bold mx-auto'>{totalQuantity}</span>
						<p className='text-sm mt-8'>Products Quantity</p>
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
								{onCartProducts.map(product => (
									<TableRow key={product.id}>
										<TableCell className='text-center'>{product.id}</TableCell>
										<TableCell>{product.name}</TableCell>
										<TableCell>{product.cart?.quantity}</TableCell>
										<TableCell>{product.cart?.unitPrice}</TableCell>
										<TableCell>
											{formatUSD(Number(product.cart?.amount))}
										</TableCell>
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
							{onCartProducts.map(product => (
								<TableRow className='border-none rounded-lg ' key={product.id}>
									<TableCell className='text-sm'>{product.id}</TableCell>
									<TableCell className='text-right text-sm'>
										{product.cart?.quantity}
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
