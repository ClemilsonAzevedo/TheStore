import { X } from "lucide-react";
import { PopoverTrigger } from "../ui/popover";

export function CloseButton() {
  return (
    <PopoverTrigger className="text-neutral-600 hover:text-neutral-950 focus-visible:outline-none absolute right-5 top-5">
      <X size={20} />
    </PopoverTrigger>
  );
}
