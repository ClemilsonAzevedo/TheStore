import { Button } from "@/components/ui/button";
import google from "@/assets/gmail.svg";
import github from "@/assets/github.svg";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function SignUp() {
	return (
		<section className="w-full h-full flex justify-center items-center">
			<div className="flex w-1/2 flex-col gap-3">
				<h1 className="font-bold text-4xl">
					Se <span className="text-violet-500">Registre</span> em THE STORE
				</h1>
				<p>
					Seja um usuário para realizar suas compra desejadas de produtos
					eletrónicos nesta loja
				</p>
				<Button className="flex gap-2" variant="outline">
					<img src={google} alt="" />
					Sign up With Google
				</Button>
				<Button className="flex gap-2" variant="outline">
					<img src={github} alt="" />
					Sign up With Github
				</Button>
				<div className="flex gap-2">
					<div className="w-full px-4 inline-flex gap-1 items-center border border-black bg-background shadow-sm justify-center whitespace-nowrap rounded-md text-sm">
						<label htmlFor="">
							<Mail className="text-neutral-600" />
						</label>
						<Input
							className="bg-transparent h-full border-0 outline-none shadow-none focus:border-0 placeholder:text-neutral-600 flex-1"
							placeholder="Add your email for recive magic link..."
						/>
					</div>
					<Button>Continue</Button>
				</div>
			</div>
		</section>
	);
}
