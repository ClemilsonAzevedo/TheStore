import type { ProductInterface } from '@/@types/ProductInterface'
import { storeApi } from '@/api/store-api'
import { Product } from '@/components/Product'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Filter, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Store() {
	const [products, setProducts] = useState<ProductInterface[]>([])
	const [isProductsLoading, setIsProductsLoading] = useState(false)

	useEffect(() => {
		setIsProductsLoading(true)
		storeApi
			.get('/products')
			.then(response => {
				setProducts(response.data)
			})
			.finally(() => setIsProductsLoading(false))
	}, [])

	const [filterProductsOnPage, setFilterProductsOnPage] = useState(products)
	const [productFilteredValue, setProductFilteredValue] =
		useState<string>('all products')

	function filterProductPerSelectValue(value: string) {
		setProductFilteredValue(value)
		if (value === 'all products') {
			setFilterProductsOnPage(products)
			return
		}

		const filterProducts = products.filter(product => product.type === value)
		setFilterProductsOnPage(filterProducts)
	}

	return (
		<section className='flex gap-5 justify-start flex-col w-full py-5 overflow-y-auto'>
			<div className='flex w-full items-center gap-5 flex-1'>
				<div className='flex items-center gap-2 border w-[350px] py-2 pl-5 rounded-lg focus-within:border-violet-500'>
					<label htmlFor='filter'>
						<Filter size={24} />
					</label>
					<Input
						id='filter'
						placeholder='Filter name...'
						className='border-none shadow-none outline-none placeholder:text-sm placeholder:text-neutral-600 text-sm'
						onChange={e => {
							const { value } = e.target
							setFilterProductsOnPage(
								products.filter(filteredProduct =>
									filteredProduct.name
										.toLowerCase()
										.includes(value.toLowerCase()),
								),
							)
						}}
					/>
				</div>
				<Select
					defaultValue={productFilteredValue}
					value={productFilteredValue}
					onValueChange={value => filterProductPerSelectValue(value)}>
					<SelectTrigger className='w-[180px] focus-visible:ring-violet-500 h-full'>
						<SelectValue placeholder='all products' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Category</SelectLabel>
							<SelectItem value='all products'>all products</SelectItem>
							<SelectItem value='laptop'>laptops</SelectItem>
							<SelectItem value='smartphone'>smartphones</SelectItem>
							<SelectItem value='headphone'>headphones</SelectItem>
							<SelectItem value='smartwatch'>smartwatches</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
			<div className='flex flex-col gap-5 items-center h-full mx-5'>
				<div className='flex flex-wrap gap-5 justify-center w-full mb-5'>
					{isProductsLoading ? (
						<Loader2
							size={32}
							className='animate-spin repeat-infinite transition flex h-full items-center justify-center'
						/>
					) : (
						(filterProductsOnPage.length === 0
							? products
							: filterProductsOnPage
						).map((product, _) => (
							<Product
								key={product.id}
								id={product.id}
								name={product.name}
								description={product.description}
								isLiked={product.isLiked}
								price={product.price}
							/>
						))
					)}
				</div>
			</div>
		</section>
	)
}
