"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen space-y-2">
			<h1 className="text-6xl font-extrabold">
				404
			</h1>

			<p className="text-muted-foreground">
				The page you are looking for was not found.
			</p>

			<div className="flex gap-2">
				<Button onClick={() => history.go(-1)} variant="ghost">
					<ArrowLeft />

					Back
				</Button>

				<Button asChild variant="default">
					<Link href="/">
						<Home />

						Home
					</Link>
				</Button>
			</div>
		</div>
	);
};