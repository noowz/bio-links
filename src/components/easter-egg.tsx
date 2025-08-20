"use client";

import confetti from "canvas-confetti";
import { Egg } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { toast } from "sonner";

interface EasterEggProps {
	children: ReactNode;
};

export function EasterEgg({
	children
}: EasterEggProps) {
	const [easterEggFound, setEasterEggFound] = useState(false);

	useEffect(() => {
		const getEasterEggFound = () => {
			return localStorage.getItem("easterEggFound") === "true";
		};

		setEasterEggFound(getEasterEggFound());

		const handleStorageChange = () => {
			return setEasterEggFound(getEasterEggFound());
		};

		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	function triggerConfetti() {
		if (easterEggFound) {
			return;
		};

		confetti({
			particleCount: 100,
			spread: 70,
			origin: {
				y: 0.6
			}
		});

		toast("You found an Easter Egg", {
			description: "Enjoy the confetti, this will only happen once",
			icon: <Egg />
		});

		setEasterEggFound(true);

		localStorage.setItem("easterEggFound", "true");
	};

	return (
		<div role="button" tabIndex={0} onKeyDown={event => {
			if (!easterEggFound && (event.key === "Enter" || event.key === " ")) {
				triggerConfetti();
			};
		}} onClick={triggerConfetti} className={easterEggFound ? "cursor-auto" : "cursor-pointer"}>
			{children}
		</div>
	);
};