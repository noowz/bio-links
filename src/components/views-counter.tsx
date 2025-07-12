import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!redisUrl && !redisToken) {
	throw new Error("Missing UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN environment variables.");
};

if (!redisUrl) {
	throw new Error("Missing UPSTASH_REDIS_REST_URL environment variable.");
};

if (!redisToken) {
	throw new Error("Missing UPSTASH_REDIS_REST_TOKEN environment variable.");
};

const redis = new Redis({
	url: redisUrl,
	token: redisToken
});

export async function ViewsCounter() {
	const views = await redis.incr("pageviews");

	return (
		<Tooltip>
			<TooltipTrigger className="flex items-center space-x-2 text-sm text-muted-foreground">
				<Eye className="size-4" />

				<span>
					{views}
				</span>
			</TooltipTrigger>

			<TooltipContent>
				<p>
					Views
				</p>
			</TooltipContent>
		</Tooltip>
	);
};