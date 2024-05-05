export interface ProductInterface {
	id?: string
	name: string
	description?: string
	price?: string
	isLiked: boolean
	image?: string
	sells?: number
	onCart?: boolean
	cart?: {
		unitPrice?: number
		quantity?: number
		amount?: number
	}
}
