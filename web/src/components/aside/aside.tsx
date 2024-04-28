import {
	Figma,
	Github,
	Heart,
	Home,
	CircleUserRound,
	Settings,
	ShoppingBasket,
	ShoppingCart,
	Sun,
	User,
} from "lucide-react";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "../ui/switch";
import { Link } from "react-router-dom";

export default function Aside() {
	return (
		<aside className="flex h-full w-[50px] flex-col items-center justify-between py-5">
			<div>
				<div className="bg-white relative rounded-full p-2 duration-300 hover:bg-neutral-400">
					<span className="absolute right-1 top-2 h-[5px] w-[5px] rounded-full bg-violet-500" />
					<a href="/cart">
						<ShoppingCart />
					</a>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-400">
					<a href="/">
						<Home />
					</a>
				</div>
				<div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-400">
					<a href="/loved">
						<Heart />
					</a>
				</div>
				<div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-400">
					<a href="/products">
						<ShoppingBasket />
					</a>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<Popover>
					<PopoverTrigger asChild>
						<div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-400">
							<User />
							<PopoverContent className="max-w-max ml-16 flex flex-col items-start gap-5 bg-neutral-50">
								<Link className="flex gap-2 hover:text-violet-500" to="/signup">
									<CircleUserRound /> SignUp
								</Link>
								<Link className="flex gap-2 hover:text-violet-500" to="/login">
									<CircleUserRound /> Login
								</Link>
							</PopoverContent>
						</div>
					</PopoverTrigger>
				</Popover>
				<Popover>
					<PopoverTrigger asChild>
						<div className="bg-white rounded-full p-2 duration-300 hover:bg-neutral-400">
							<Settings className="hover:rotate-90 transition" />

							<PopoverContent className="max-w-max ml-16 flex flex-col items-start gap-5 bg-neutral-50">
								<div className="flex items-center right-0 justify-center w-full gap-2 p-1">
									<label htmlFor="theme">
										<Sun />
									</label>
									<Switch id="theme" className="focus:outline-none" />
								</div>
								<a
									className="flex items-center gap-2 transition hover:text-violet-500 p-1"
									href="http://"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github size={20} />
									<span className="text-sm">Repository</span>
								</a>
								<a
									className="flex items-center gap-2 transition hover:text-violet-500 p-1"
									href="http://"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Figma size={20} />
									<span className="text-sm">Design</span>
								</a>
							</PopoverContent>
						</div>
					</PopoverTrigger>
				</Popover>
			</div>
		</aside>
	);
}
