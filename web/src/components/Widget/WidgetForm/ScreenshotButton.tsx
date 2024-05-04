import html2canvas from 'html2canvas'
import { Camera, Trash } from 'lucide-react'
import { useState } from 'react'
import { Loading } from '../Loading'

interface ScreenshotButtonProps {
	screenshot: string | null
	onScreenshotTook: (screenshot: string | null) => void
}

export function ScreenshotButton({
	onScreenshotTook,
	screenshot,
}: ScreenshotButtonProps) {
	const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

	async function handleTakeScreenshot() {
		setIsTakingScreenshot(true)

		const htmlElement = document.querySelector('html')

		if (htmlElement) {
			try {
				const canvas = await html2canvas(htmlElement)
				const base64image = canvas.toDataURL('image/png')
				onScreenshotTook(base64image)
			} catch (error) {
				console.error('Ocorreu um erro ao capturar a imagem:', error)
			}
		} else {
			console.error('Elemento HTML não encontrado.')
		}

		setIsTakingScreenshot(false)
	}

	if (screenshot) {
		return (
			<button
				type='button'
				onClick={() => onScreenshotTook(null)}
				className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-neutral-600 hover:text-neutral-950 transition-colors focus-visible:outline-none'
				style={{
					backgroundImage: `url(${screenshot})`,
					backgroundPosition: 'right bottom',
					backgroundSize: 180,
				}}>
				<Trash size={16} />
			</button>
		)
	}

	return (
		<button
			onClick={handleTakeScreenshot}
			type='button'
			className='p-2 bg-neutral-50 rounded-lg border-transparent hover:bg-neutral-600 transition-colors focus:outline-none focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-neutral-600 '>
			{isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
		</button>
	)
}
