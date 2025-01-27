"use client";

import { useToast } from "@/hooks/use-toast";
import { ReactNode, useState, useEffect } from "react";
import confetti from "canvas-confetti";

interface EasterEggProps {
	children: ReactNode;
};

export function EasterEgg({
	children
}: EasterEggProps) {
	const [easterEggFound, setEasterEggFound] = useState(false);

	const { toast } = useToast();

	function checkEasterEggFound() {
		return localStorage.getItem("easterEggFound") === "true";
	};

	useEffect(() => {
		setEasterEggFound(checkEasterEggFound());

		function handleStorageChange() {
			setEasterEggFound(checkEasterEggFound());
		};

		addEventListener("storage", handleStorageChange);

		const intervalId = setInterval(() => {
			const isEasterEggFound = checkEasterEggFound();

			if (easterEggFound !== isEasterEggFound) {
				setEasterEggFound(isEasterEggFound);
			};
		}, 500);

		return () => {
			window.removeEventListener("storage", handleStorageChange);

			clearInterval(intervalId);
		};
	}, [easterEggFound]);

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

		toast({
			title: "🥚 You found an Easter Egg!",
			description: "🐰 Enjoy the confetti! This will only happen once."
		});

		setEasterEggFound(true);

		localStorage.setItem("easterEggFound", "true");
	};

	return (
		<div onClick={triggerConfetti} className={easterEggFound ? "cursor-auto" : "cursor-pointer"}>
			{children}
		</div>
	);
};