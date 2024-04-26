import { Route, Routes as RoutesDOM } from 'react-router-dom'
import LayoutDefault from './layouts/layoutDefault'
import { Home } from './pages/home'
import { LovedProducts } from './pages/loved-products'

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
						<Home />
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
				path='/products'
				element={
					<LayoutDefault>
						<Home />
					</LayoutDefault>
				}
			/>
		</RoutesDOM>
	)
}
