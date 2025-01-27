import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Share } from "@/components/share";
import { ViewsCounter } from "@/components/views-counter";
import { ModeToggle } from "@/components/mode-toggle";
import { EasterEgg } from "@/components/easter-egg";
import { SocialMedia } from "@/components/social-media";
import Link from "next/link";
import { SiGithub } from "@icons-pack/react-simple-icons";

export function ProfileCard() {
	return (
		<Card className="w-full max-w-md p-6 space-y-6">
			<div className="flex items-center justify-between">
				<Share />

				<ViewsCounter />

				<ModeToggle />
			</div>

			<div className="flex flex-col items-center space-y-2">
				<EasterEgg>
					<Avatar className="size-24">
						<AvatarImage src="https://github.com/noowz.png" alt="Profile Picture" />

						<AvatarFallback>N</AvatarFallback>
					</Avatar>
				</EasterEgg>

				<div className="flex flex-col items-center">
					<h1 className="text-lg font-bold">Noowz</h1>
					<p className="text-sm font-medium text-muted-foreground">@noowz</p>
				</div>

				<p className="text-center">Full-Stack Developer</p>
			</div>

			<div className="space-y-2">
				<Button asChild className="w-full" variant="outline">
					<Link href="https://github.com/noowz/bio-links" target="_blank">
						<SiGithub />

						GitHub Repository
					</Link>
				</Button>
			</div>

			<SocialMedia />
		</Card>
	);
};