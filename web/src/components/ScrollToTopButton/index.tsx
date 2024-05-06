import { useEffect, useRef, useState } from 'react'

function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false)
	const scrollRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 300) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}

		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<div
			ref={scrollRef}
			className={`fixed bottom-4 right-4 z-50 ${
				isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
			}`}>
			<button
				type='button'
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				onClick={scrollToTop}>
				Scroll to Top
			</button>
		</div>
	)
}

export default ScrollToTopButton
