"use client";

import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Share2 } from "lucide-react";

export function Share() {
	const { toast } = useToast();

	async function handleShare() {
		const shareData = {
			title: "Noowz's Bio Links",
			text: "Check out Noowz's bio links!",
			url: window.location.href
		};

		try {
			if (navigator.share) {
				await navigator.share(shareData);
			} else {
				await navigator.clipboard.writeText(window.location.href);

				toast({
					title: "🔗 Link copied!",
					description: "The page URL has been copied to your clipboard."
				});
			};
		} catch (error) {
			console.error("Error sharing", error);

			toast({
				title: "❌ Sharing failed",
				description: "There was an error while trying to share the link.",
				variant: "destructive"
			});
		};
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button onClick={handleShare} variant="ghost" size="icon">
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