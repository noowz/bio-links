import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Eye } from "lucide-react";

export function ViewsCounter() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger className="flex items-center space-x-2 text-sm text-muted-foreground">
					<Eye className="size-4" />

					<span>0</span>
				</TooltipTrigger>

				<TooltipContent>
					<p>Views</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};