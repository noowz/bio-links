"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

export function Share() {
	async function handleShare() {
		const shareData = {
			title: document.title,
			text: "Check out Noowz's bio links",
			url: window.location.href
		};

		try {
			if (navigator.share) {
				await navigator.share(shareData);

				toast.success("The page has been shared");
			} else {
				await navigator.clipboard.writeText(`${shareData.text}: ${shareData.url}`);

				toast.success("The content has been copied to your clipboard");
			};
		} catch (error) {
			console.error("An error occured while trying to share the page.", error);

			toast.error("Failed to share the page");
		};
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button onClick={handleShare} variant="outline" size="icon">
						<Share2 />
					</Button>
				</TooltipTrigger>

				<TooltipContent>
					<p>Share</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};