import { ChevronLeft } from "lucide-react"
import { FeedbackType, feedBackTypes } from ".."
import { CloseButton } from "../../CloseButton"

import { ScreenshotButton } from "../ScreenshotButton"
import { FormEvent, useState } from "react"
import { api } from "../../../../api/widget-api"
import { Loading } from "../../Loading"
import { Button } from "@/components/ui/button"

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
  onFeedbackSent: () => void
}


export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)


  const feedbackTypeInfo = feedBackTypes[feedbackType]

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault()
    setIsSendingFeedback(true)

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    })

    setIsSendingFeedback(false)
    onFeedbackSent()
  }

  return (
    <>
      <header>
        <button className="absolute top-5 left-5 text-neutral-600 hover:text-neutral-950" type="button" onClick={onFeedbackRestartRequested}>
          <ChevronLeft size={20} />
        </button>
        <span className="text-lg leading-relaxed flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-5 h-5" />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-neutral-600 text-neutral-950 border-neutral-400 bg-transparent resize-none focus:border-neutral-600 focus:ring-neutral-600 focus:ring-1 focus:outline-none scrollbar-thumb-neutral-600 scrollbar-track-transparent scrollbar-thin p-1 rounded-lg"
          placeholder="Tell us in detail what is happening..."
          onChange={event => setComment(event.target.value)}
        />

        <footer className="flex mt-2 gap-2 items-center">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <Button
            disabled={comment.length === 0 || isSendingFeedback}
            type="submit"
            className="p-2 bg-violet-500 rounded-lg border-transparent flex-1 flex justify-center items-center text-sm hover:bg-violet-500/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-violet-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : 'Send Feedback'}
          </Button>
        </footer>
      </form>
    </>
  )
}