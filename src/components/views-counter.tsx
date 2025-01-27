import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL!,
	token: process.env.UPSTASH_REDIS_REST_TOKEN!
});

export async function ViewsCounter() {
	const views = await redis.incr("pageviews");

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className="flex items-center space-x-2 text-sm text-muted-foreground">
					<Eye className="size-4" />

					<span>{views}</span>
				</TooltipTrigger>

				<TooltipContent>
					<p>Views</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};