import { Product } from '@/components/Product'
import { products } from '@/api/fakeProductsProps'
import { formatUSD } from '@/utils/formatToUSD'

export function LovedProducts() {
	return (
		<section className='flex flex-wrap gap-5 py-5 justify-center items-start w-full overflow-auto'>
			{products
				.filter(product => product.isLiked)
				.map((product, index) => (
					<Product
						key={Number(index)}
						name={product.name}
						id={String(index)}
						price={formatUSD(Number(product.price))}
						isLiked
					/>
				))}
		</section>
	)
}
