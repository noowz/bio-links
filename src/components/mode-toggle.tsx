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
					<Button onClick={theme === "light" ? () => setTheme("dark") : () => setTheme("light")} variant="ghost" size="icon">
						<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

						<span className="sr-only">Toggle theme</span>
					</Button>
				</TooltipTrigger>

				<TooltipContent>
					<p>Theme</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};