import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { SiDiscord, SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Globe } from "lucide-react";
import Link from "next/link";

const socialLinks = [
	{
		href: "https://noowz.dev",
		label: "Website",
		icon: <Globe />
	},
	{
		href: "https://github.com/noowz",
		label: "GitHub",
		icon: <SiGithub />
	},
	{
		href: "https://x.com/noowzgg",
		label: "X",
		icon: <SiX />
	},
	{
		href: "https://discord.com/users/163656084714815491",
		label: "Discord",
		icon: <SiDiscord />
	}
];

export function SocialMediaLinks() {
	return (
		<div className="flex items-center justify-center space-x-2">
			{socialLinks.map(({
				href,
				label,
				icon
			}) => (
				<Tooltip key={label}>
					<TooltipTrigger>
						<Button asChild variant="outline" size="icon">
							<Link href={href} target="_blank" rel="noopener noreferrer">
								{icon}
							</Link>
						</Button>
					</TooltipTrigger>

					<TooltipContent>
						<p>
							{label}
						</p>
					</TooltipContent>
				</Tooltip>
			))}
		</div>
	);
};