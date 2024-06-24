import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import { Routes } from './routes'

export function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</BrowserRouter>
	)
}
