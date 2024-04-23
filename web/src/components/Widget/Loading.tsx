import { Loader2 } from "lucide-react";

export function Loading() {

  return (

    <div className="w-6 h-6 flex items-center justify-center overflow-hidden">
      <Loader2 className="animate-spin" />
    </div>

  )
}