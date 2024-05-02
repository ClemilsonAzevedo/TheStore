import { Product } from '@/components/Product'
import { Select } from '@/components/ui/select'

export function Store() {
	return (
		<section className='flex flex-wrap gap-5 w-full justify-center items-start my-5'>
			<div className='flex gap-5 items-center mx-5'>
				<Select />
				<Select />
				<div className='flex flex-wrap gap-5 justify-center w-full'>
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</section>
	)
}
