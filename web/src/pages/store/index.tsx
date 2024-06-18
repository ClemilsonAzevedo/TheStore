//Todo: Usar URL state para fixar os produtos pelo filtro ou pela seleção
//Todo: Apenas Filtrar a seleção do produto dentro do filtro de seleção

import { products } from '@/api/fakeProductsProps'
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
import { Filter } from 'lucide-react'
import { useState } from 'react'

export function Store() {


	const [allProducts, _] = useState(products)
	const [filterOnPage, setFilterOnPage] = useState(allProducts)

	const [productFilteredValue, setProductFilteredValue] =
		useState<string>('all products')

	function filterProductPerSelectValue(value: string) {
		setProductFilteredValue(value)
		if (value === 'all products') {
			setFilterOnPage(allProducts)
			return
		}

		const filterProducts = products.filter(product => product.type === value)

		setFilterOnPage(filterProducts)
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
							setFilterOnPage(
								allProducts.filter(filteredProduct =>
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
					{filterOnPage.map((product, _) => (
						<Product
							key={product.id}
							id={product.id}
							name={product.name}
							description={product.description}
							isLiked={product.isLiked}
							price={product.price}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
