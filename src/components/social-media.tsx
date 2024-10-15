import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe } from "lucide-react";
import { SiGithub, SiX, SiDiscord } from "@icons-pack/react-simple-icons";

export function SocialMedia() {
	return (
		<div className="flex items-center justify-center space-x-2">
			<TooltipProvider>
				<div>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon" aria-label="Website">
								<Link href="https://noowz.dev" target="_blank" aria-label="Website">
									<Globe className="size-5" />
								</Link>
							</Button>
						</TooltipTrigger>

						<TooltipContent>
							<p>Website</p>
						</TooltipContent>
					</Tooltip>
				</div>

				<div>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon" aria-label="GitHub">
								<Link href="https://github.com/noowz" target="_blank" aria-label="GitHub">
									<SiGithub className="size-5" />
								</Link>
							</Button>
						</TooltipTrigger>

						<TooltipContent>
							<p>GitHub</p>
						</TooltipContent>
					</Tooltip>
				</div>

				<div>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon" aria-label="X">
								<Link href="https://x.com/noowzgg" target="_blank" aria-label="X">
									<SiX className="size-5" />
								</Link>
							</Button>
						</TooltipTrigger>

						<TooltipContent>
							<p>X</p>
						</TooltipContent>
					</Tooltip>
				</div>

				<div>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon" aria-label="Discord">
								<Link href="https://discord.com/users/163656084714815491" target="_blank" aria-label="Discord">
									<SiDiscord className="size-5" />
								</Link>
							</Button>
						</TooltipTrigger>

						<TooltipContent>
							<p>Discord</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</TooltipProvider>
		</div>
	);
};