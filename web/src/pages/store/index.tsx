import { products } from '@/api/fakeProductsProps'
import { Product } from '@/components/Product'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export function Store() {
	return (
		<section className='flex flex-wrap gap-5 justify-center w-full items-start py-5 overflow-y-auto'>
			<div className='flex flex-col gap-5 items-center mx-5'>
				<div className='mr-auto'>
					<Select>
						<SelectTrigger className='w-[180px] focus-visible:ring-violet-500	'>
							<SelectValue placeholder='All Products' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Category</SelectLabel>
								<SelectItem value='laptops'>Laptops</SelectItem>
								<SelectItem value='Smartphones'>Smartphones</SelectItem>
								<SelectItem value='headphones'>Headphones</SelectItem>
								<SelectItem value='smartwatches'>Smartwatches</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<div className='flex flex-wrap gap-5 justify-center w-full mb-5'>
					{products.map((product, _) => (
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
