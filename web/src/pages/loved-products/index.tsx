import { products } from '@/api/fakeProductsProps'
import { DestacProduct } from '@/components/DestacProduct'
import { useEffect, useState } from 'react'

export function LovedProducts() {
	const [likedProducts, setLikedProducts] = useState(
		products.filter(product => product.isLiked),
	)
	useEffect(() => {
		setLikedProducts(products.filter(product => product.isLiked))
	}, [products])

	return (
		<section className='flex flex-wrap gap-5 py-5 justify-center items-start w-full overflow-auto'>
			{likedProducts.map((product, index) => (
				<DestacProduct
					key={likedProducts.length + 1}
					name={product.name}
					id={String(index)}
					price={product.price}
					isLiked
				/>
			))}
		</section>
	)
}
