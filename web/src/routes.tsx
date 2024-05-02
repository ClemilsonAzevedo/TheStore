import { Route, Routes as RoutesDOM } from 'react-router-dom'
import LayoutDefault from './layouts/layoutDefault'
import { Cart } from './pages/cart'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { LovedProducts } from './pages/loved-products'
import SignUp from './pages/sign-up'
import { Store } from './pages/store'

export default function Routes() {
	return (
		<RoutesDOM>
			<Route
				path='/'
				element={
					<LayoutDefault>
						<Home />
					</LayoutDefault>
				}
			/>
			<Route
				path='/cart'
				element={
					<LayoutDefault>
						<Cart />
					</LayoutDefault>
				}
			/>
			<Route
				path='/loved'
				element={
					<LayoutDefault>
						<LovedProducts />
					</LayoutDefault>
				}
			/>
			<Route
				path='/store'
				element={
					<LayoutDefault>
						<Store />
					</LayoutDefault>
				}
			/>
			<Route
				path='/signup'
				element={
					<LayoutDefault>
						<SignUp />
					</LayoutDefault>
				}
			/>
			<Route
				path='/login'
				element={
					<LayoutDefault>
						<Login />
					</LayoutDefault>
				}
			/>
		</RoutesDOM>
	)
}
