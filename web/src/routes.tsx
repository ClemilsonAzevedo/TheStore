import { Route, Routes as RoutesDOM } from 'react-router-dom'
import { LayoutDefault } from './layouts/layoutDefault'
import { ForgotPassword } from './pages/ForgotPassword'
import { Cart } from './pages/cart'
import { Home } from './pages/home'
import { LovedProducts } from './pages/loved-products'
import { ProductDetail } from './pages/productDetail'
import { Store } from './pages/store'

export function Routes() {
	return (
		<RoutesDOM>
			<Route path='/' element={<LayoutDefault />}>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/loved' element={<LovedProducts />} />
				<Route path='/store' element={<Store />} />
				<Route path='/products/:productId' element={<ProductDetail />} />
				<Route path='/forgot-password' element={<ForgotPassword />} />
			</Route>
		</RoutesDOM>
	)
}
