import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { SignUp } from '../../components/SignUp'
import { Button } from '../../components/ui/button'

export function ForgotPassword() {
	return (
		<section className='w-full flex justify-center items-center'>
			<form className='py-5 max-w-full max-h-max flex flex-col gap-8 '>
				<div className='space-y-3 text-center w-[405px]'>
					<h2 className='text-3xl font-bold'>Recovery your password</h2>
				</div>
				<div className='space-y-3'>
					<div className='flex flex-col w-full gap-2'>
						<label htmlFor='email' className='text-sm'>
							Email
						</label>
						<input
							type='email'
							id='email'
							placeholder='Enter your email address'
							className='text-sm pl-3 py-3 placeholder:text-neutral-600 bg-neutral-50 border border-neutral-600 focus-visible:outline-violet-500 rounded-lg'
						/>
					</div>
				</div>

				<div className='space-y-3'>
					<Button
						type='submit'
						className='w-full bg-violet-500 hover:bg-violet-500/70 text-sm h-12 disabled:cursor-not-allowed'>
						Recovery
					</Button>
				</div>

				<div className='text-center space-y-3'>
					<Dialog>
						<DialogContent className='px-[9.375rem] py-5 border-neutral-600 bg-neutral-400 focus-visible:outline-none max-w-max'>
							<SignUp />
						</DialogContent>
						<DialogTrigger className='p-2 hover:bg-neutral-400 rounded-full focus-visible:outline-none transition group relative'>
							<span className='block underline hover:text-violet-500 text-sm transition font-normal'>
								Not have an account yet? Create one!
							</span>
						</DialogTrigger>
					</Dialog>
				</div>
			</form>
		</section>
	)
}
