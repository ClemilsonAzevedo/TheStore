import { PopoverTrigger } from "../ui/popover";
import { X } from "lucide-react";

export function CloseButton() {
  return (
    <PopoverTrigger className="text-neutral-600 hover:text-neutral-950" >
      <X />
    </PopoverTrigger>
  )
}