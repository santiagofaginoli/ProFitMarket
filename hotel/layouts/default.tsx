import { NavbarMain } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<NavbarMain />
			<main className="container mx-auto max-w-7xl flex-grow">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://divgeeks-ccqalgxj0-divgeeks.vercel.app/contacto/contacto"
					title="DivGeeks homepage"
					target="_blank"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">DivGeeks</p>
				</Link>
			</footer>
		</div>
	);
}
