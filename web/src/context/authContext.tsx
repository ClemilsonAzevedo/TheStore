import { storeApi } from '@/api/store-api'
import type { AxiosError } from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

interface AuthContextType {
	SignIn: ({ email, password }: SignInProps) => Promise<void>
	SignOut: () => void
	user: User | null
}

interface User {
	id: string
	name: string
	email: string
}

interface AuthProviderProps {
	children: React.ReactNode
}

interface SignInProps {
	email: string
	password: string
}

interface AuthState {
	user: User | null
	token: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: AuthProviderProps) {
	const [data, setData] = useState<AuthState>({ user: null, token: null })

	async function SignIn({ email, password }: SignInProps) {
		try {
			const response = await storeApi.post('/user/signin', { email, password })
			const { user, token } = response.data

			localStorage.setItem('@TheStore:user', JSON.stringify(user))
			localStorage.setItem('@TheStore:token', token)

			storeApi.defaults.headers.common.Authorization = `Bearer ${token}`
			setData({ user, token })
		} catch (error: unknown) {
			if (isAxiosError(error)) {
				if (error.response) {
					const errorMessage = (error.response.data as { message: string })
						.message
					throw new Error(errorMessage)
				}
				throw new Error('Error trying to login, please try again later')
			}
			throw new Error('An unexpected error occurred')
		}
	}

	function isAxiosError(error: unknown): error is AxiosError {
		return (error as AxiosError).isAxiosError !== undefined
	}

	function SignOut() {
		localStorage.removeItem('@TheStore:user')
		localStorage.removeItem('@TheStore:token')
		setData({ user: null, token: null })
	}

	useEffect(() => {
		const token = localStorage.getItem('@TheStore:token')
		const user = localStorage.getItem('@TheStore:user')

		if (token && user !== undefined && user !== 'undefined') {
			try {
				const parsedUser = JSON.parse(user)
				storeApi.defaults.headers.common.Authorization = `Bearer ${token}`
				setData({ token, user: parsedUser })
			} catch (error) {
				console.error('Error parsing user from localStorage', error)
				localStorage.removeItem('@TheStore:user')
				localStorage.removeItem('@TheStore:token')
				setData({ user: null, token: null })
			}
		}
	}, [])

	return (
		<AuthContext.Provider value={{ SignIn, SignOut, user: data.user }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
