import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function Header() {
  return (
    <header className="h-[76px] min-w-screen flex items-center justify-center">
      <div className="flex items-center w-[400px] rounded-full bg-neutral-400">
        <label htmlFor="search" className="py-2 pl-5">
          <Search className="text-neutral-600" />
        </label>
        <Input
          type="search"
          id="search"
          className="bg-transparent h-full border-0 outline-none shadow-none focus:border-0 placeholder:text-neutral-600 flex-1"
          placeholder="You will search here ..."
        />
      </div>
    </header>
  );
}
