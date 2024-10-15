"use client";

import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button onClick={theme === "light" ? () => setTheme("dark") : () => setTheme("light")} variant="ghost" size="icon" aria-label="Toggle Theme">
						<Sun className="transition-all scale-100 rotate-0 size-5 dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute transition-all scale-0 rotate-90 size-5 dark:rotate-0 dark:scale-100" />
					</Button>
				</TooltipTrigger>

				<TooltipContent>
					<p>Theme</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};