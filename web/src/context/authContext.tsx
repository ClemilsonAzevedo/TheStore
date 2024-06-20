import { storeApi } from '@/api/store-api'
import type { AxiosError } from 'axios'
import { useEffect } from 'react'
import { create } from 'zustand'

interface User {
	name: string
	email: string
}

interface AuthState {
	user: User | null
	token: string | null
	SignIn: (props: SignInProps) => Promise<void>
	SignOut: () => void
}

interface SignInProps {
	email: string
	password: string
}

function isAxiosError(error: unknown): error is AxiosError {
	return (error as AxiosError).isAxiosError !== undefined
}

const useAuthStore = create<AuthState>(set => ({
	user: null,
	token: null,

	SignIn: async ({ email, password }: SignInProps) => {
		try {
			const response = await storeApi.post('/user/signin', { email, password })
			const { user, token } = response.data

			localStorage.setItem('@TheStore:user', JSON.stringify(user))
			localStorage.setItem('@TheStore:token', token)

			storeApi.defaults.headers.common.Authorization = `Bearer ${token}`
			set({ user, token })
		} catch (error: unknown) {
			if (isAxiosError(error) && error.response) {
				const errorMessage = (error.response.data as { message: string })
					.message
				throw new Error(errorMessage)
			}
			throw new Error('An unexpected error occurred')
		}
	},

	SignOut: () => {
		localStorage.removeItem('@TheStore:user')
		localStorage.removeItem('@TheStore:token')
		set({ user: null, token: null })
	},
}))

interface AuthProviderProps {
	children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
	const setAuthState = useAuthStore(state => state)

	useEffect(() => {
		const token = localStorage.getItem('@TheStore:token')
		const user = localStorage.getItem('@TheStore:user')

		console.log('token from localStorage:', token)
		console.log('user from localStorage:', user)

		if (token && user && user !== 'undefined') {
			try {
				const parsedUser: User = JSON.parse(user)
				storeApi.defaults.headers.common.Authorization = `Bearer ${token}`
				setAuthState({ user: parsedUser, token })
			} catch (error) {
				console.error('Error parsing user from localStorage', error)
				localStorage.removeItem('@TheStore:user')
				localStorage.removeItem('@TheStore:token')
				setAuthState({ user: null, token: null })
			}
		}
	}, [setAuthState])

	return <>{children}</>
}

export function useAuth() {
	return useAuthStore(state => ({
		user: state.user,
		SignIn: state.SignIn,
		SignOut: state.SignOut,
	}))
}
