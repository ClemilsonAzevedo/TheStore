import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import githubLogo from '../../assets/github.svg'
import gmailLogo from '../../assets/gmail.svg'

export function Login() {
	return (
		<section className='w-full grid place-content-center'>
			<div className='flex flex-col justify-center items-center gap-5 mb-6'>
				<h2 className='font-bold text-4xl text-center'>
					<span className='text-violet-500'>Entrar</span> em THE STORE
				</h2>
				<p className='text-base text-center'>
					Seja um usuário para realizar a compra dos produtos nesta loja
				</p>
			</div>
			<div className='flex flex-col gap-6'>
				<form className='flex gap-2 items-center'>
					<div className='flex items-center gap-2 border border-neutral-600 rounded-lg w-[492px] p-5 '>
						<Mail className='text-neutral-600' size={24} />
						<input
							type='email'
							placeholder='Add your email for recive magic link...'
							className='flex-1 outline-none placeholder:text-neutral-400 text-neutral-950 bg-transparent'
						/>
					</div>
					<Button
						type='submit'
						className='py-5 h-full w-[150px] rounded-lg bg-violet-500 hover:bg-violet-500/70 transition'
					>
						Continue
					</Button>
				</form>
				<a
					href='http://'
					className='flex items-center gap-2 border justify-center py-4 border-neutral-950 rounded-lg hover:text-violet-500 hover:border-violet-500 transition'
				>
					<img src={githubLogo} alt='social media' />
					Sign in With Github
				</a>
				<a
					href='http://'
					className='flex items-center gap-2 border justify-center py-4 border-neutral-950 rounded-lg hover:text-violet-500 hover:border-violet-500 transition'
				>
					<img src={gmailLogo} alt='social media' />
					Sign in With Google
				</a>
			</div>
		</section>
	)
}
