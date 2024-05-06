import { Route, Routes as RoutesDOM } from 'react-router-dom'
import { LayoutDefault } from './layouts/layoutDefault'
import { Cart } from './pages/cart'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { LovedProducts } from './pages/loved-products'
import SignUp from './pages/sign-up'
import { Store } from './pages/store'

export default function Routes() {
	return (
		<RoutesDOM>
			<Route path='/' element={<LayoutDefault />}>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/loved' element={<LovedProducts />} />
				<Route path='/store' element={<Store />} />
				<Route path='/signup' element={<SignUp />} />
				<Route path='/login' element={<Login />} />
			</Route>
		</RoutesDOM>
	)
}
