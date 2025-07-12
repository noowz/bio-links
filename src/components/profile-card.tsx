import { CardLinks } from "@/components/card-links";
import { EasterEgg } from "@/components/easter-egg";
import { ModeToggle } from "@/components/mode-toggle";
import { Share } from "@/components/share";
import { SocialMediaLinks } from "@/components/social-media-links";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ViewsCounter } from "@/components/views-counter";

export function ProfileCard() {
	return (
		<Card className="w-full max-w-md p-6 space-y-2">
			<div className="flex items-center justify-between">
				<Share />
				<ViewsCounter />
				<ModeToggle />
			</div>

			<div className="flex flex-col items-center space-y-2">
				<EasterEgg>
					<Avatar className="size-24">
						<AvatarImage src="https://github.com/noowz.png" alt="Profile Picture" />

						<AvatarFallback>
							N
						</AvatarFallback>
					</Avatar>
				</EasterEgg>

				<div className="flex flex-col items-center">
					<h1 className="text-lg font-bold">
						Noowz
					</h1>

					<p className="text-sm font-medium text-muted-foreground">
						@noowz
					</p>
				</div>

				<p className="text-center">
					Full-Stack Developer
				</p>
			</div>

			<CardLinks />
			<SocialMediaLinks />
		</Card>
	);
};