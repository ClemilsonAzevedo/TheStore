import { products } from '@/api/fakeProductsProps'
import { formatUSD } from './formatToUSD'

export let totalQuantity = 0
export let totalAmountCartItems = 0

for (const product of products) {
	if (
		product.onCart &&
		product.cart?.quantity !== undefined &&
		product.cart?.amount !== undefined
	) {
		totalQuantity += product.cart.quantity
		totalAmountCartItems += product.cart.amount
	}
}

export const totalAmount = formatUSD(totalAmountCartItems)
