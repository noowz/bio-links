import { Button } from "@/components/ui/button";
import { SiPaypal } from "@icons-pack/react-simple-icons";
import { Heart } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface CardLinkProps {
	href: string;
	icon: ReactNode;
	text: string;
};

const cardLinks: CardLinkProps[] = [
	{
		href: "https://github.com/sponsors/noowz",
		icon: <Heart />,
		text: "Sponsor me on GitHub"
	},
	{
		href: "https://py.pl/2Lkvm",
		icon: <SiPaypal />,
		text: "PayPal (10€ voucher)"
	},
	{
		href: "https://go.onelink.me/2887093520/6c3132b8?af_sub5=NLLWNSRH",
		icon: (
			<>
				<img src="/betclic-light.svg" alt="Betclic logo (light mode)" className="size-6 dark:hidden" />
				<img src="/betclic-dark.svg" alt="Betclic logo (dark mode)" className="size-6 hidden dark:inline" />
			</>
		),
		text: "Betclic (30€ free)"
	}
];

function CardLink({
	href,
	icon,
	text
}: CardLinkProps) {
	return (
		<Button asChild variant="outline" className="w-full">
			<Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
				{icon}

				<span>
					{text}
				</span>
			</Link>
		</Button>
	);
};

export function CardLinks() {
	return (
		<div className="space-y-2">
			{cardLinks.map(({
				href,
				icon,
				text
			}) => (
				<CardLink key={href} href={href} icon={icon} text={text} />
			))}
		</div>
	);
};