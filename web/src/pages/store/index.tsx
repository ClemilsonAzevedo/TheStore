import { Product } from '@/components/Product'
import { Select } from '@/components/ui/select'

const products = [
	{
		name: 'Dell Inspiron 15 3000',
		description: 'A reliable and affordable laptop for everyday use',
		price: 599.99,
	},
	{
		name: 'HP Pavilion 15',
		description: 'A versatile laptop with a sleek design',
		price: 749.99,
	},
	{
		name: 'Lenovo IdeaPad 3',
		description: 'A budget-friendly laptop with decent performance',
		price: 399.99,
	},
	{
		name: 'Acer Aspire 5',
		description: 'A well-rounded laptop with good value for money',
		price: 599.99,
	},
	{
		name: 'ASUS VivoBook 15',
		description: 'A lightweight and portable laptop for on-the-go use',
		price: 499.99,
	},
	{
		name: 'Microsoft Surface Laptop 4',
		description:
			'A premium laptop with a sleek design and powerful performance',
		price: 999.99,
	},
	{
		name: 'Apple MacBook Air',
		description: 'A thin and lightweight laptop with excellent battery life',
		price: 999.99,
	},
	{
		name: 'Lenovo ThinkPad X1 Carbon',
		description:
			'A durable and business-oriented laptop with great portability',
		price: 1499.99,
	},
	{
		name: 'HP Spectre x360',
		description: 'A convertible laptop with a premium design and touch screen',
		price: 1299.99,
	},
	{
		name: 'Dell XPS 13',
		description: 'A high-performance laptop with a sleek and compact design',
		price: 1199.99,
	},
	{
		name: 'Acer Swift 3',
		description:
			'A budget-friendly laptop with a metal chassis and good performance',
		price: 699.99,
	},
	{
		name: 'ASUS ZenBook 13',
		description: 'A slim and lightweight laptop with a premium metal body',
		price: 899.99,
	},
	{
		name: 'Lenovo Yoga C940',
		description: 'A versatile 2-in-1 laptop with a 360-degree hinge',
		price: 1399.99,
	},
	{
		name: 'HP Envy x360',
		description:
			'A convertible laptop with a sleek design and good performance',
		price: 899.99,
	},
	{
		name: 'Dell G5 15 Gaming',
		description: 'A budget-friendly gaming laptop with decent performance',
		price: 899.99,
	},
	{
		name: 'Acer Predator Helios 300',
		description: 'A powerful gaming laptop with a dedicated graphics card',
		price: 1199.99,
	},
	{
		name: 'ASUS ROG Zephyrus G14',
		description: 'A compact and powerful gaming laptop with a sleek design',
		price: 1399.99,
	},
	{
		name: 'Lenovo Legion 5',
		description: 'A well-rounded gaming laptop with good value for money',
		price: 999.99,
	},
	{
		name: 'HP Omen 15',
		description:
			'A gaming laptop with a sleek design and impressive performance',
		price: 1099.99,
	},
	{
		name: 'Dell Alienware m15 R6',
		description: 'A high-end gaming laptop with top-of-the-line hardware',
		price: 1799.99,
	},
]

function formatUSD(price: number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(price)
}

export function Store() {
	return (
		<section className='flex flex-wrap gap-5 justify-center w-full items-start my-5 '>
			<div className='flex gap-5 items-center mx-5'>
				<Select />
				<Select />
				<div className='flex flex-wrap gap-5 justify-center w-full mb-5'>
					{products.map((product, _) => (
						<Product
							key={products.length + 1}
							id={products.length + 1}
							name={product.name}
							description={product.description}
							price={formatUSD(product.price)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
