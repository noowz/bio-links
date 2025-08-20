import { Button } from "@/components/ui/button";
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