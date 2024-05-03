import { Product } from '@/components/Product'
import { Select } from '@/components/ui/select'
import { products } from '@/api/fakeProductsProps'
import { formatUSD } from '@/utils/formatToUSD'

export function Store() {
	return (
		<section className='flex flex-wrap gap-5 justify-center w-full items-start my-5 '>
			<div className='flex gap-5 items-center mx-5'>
				<Select />
				<Select />
				<div className='flex flex-wrap gap-5 justify-center w-full mb-5'>
					{products.map((product, _) => (
						<Product
							isLiked={false}
							key={products.length + 1}
							id={String(products.length + 1)}
							name={product.name}
							description={product.description}
							price={formatUSD(Number(product.price))}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
