import type { ProductInterface } from '@/@types/ProductInterface'
import {
	type Dispatch,
	type ReactNode,
	type SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react'

interface CartContextType {
	shoppingCart: ProductInterface[]
	setShoppingCart: Dispatch<SetStateAction<ProductInterface[]>>
}

// Cria o contexto do carrinho com valores padrão
const CartContext = createContext<CartContextType>({
	shoppingCart: [],
	setShoppingCart: () => {},
})

// Cria o contexto do carrinho com valores padrão
export const useCart = () => useContext(CartContext)

// Define as propriedades esperadas pelo componente CartProvider
interface CartProviderProps {
	children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
	const [shoppingCart, setShoppingCart] = useState<ProductInterface[]>([])

	return (
		<CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
			{children} {/* Renderiza os elementos filhos */}
		</CartContext.Provider>
	)
}
