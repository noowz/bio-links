import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Noowz | Bio Links",
	description: "Personal profile card that aggregates all the important links in one place. Easily access social media, projects, and content through this sleek, user-friendly page.",
	openGraph: {
		title: "Noowz | Bio Links",
		description: "Personal profile card that aggregates all the important links in one place. Easily access social media, projects, and content through this sleek, user-friendly page.",
		url: "https://noowz-bio-links.vercel.app",
		siteName: "Noowz | Bio Links",
		images: [
			{
				url: "https://i.imgur.com/PYzPs5X.png",
				width: 1919,
				height: 866,
				alt: "Website Preview"
			}
		],
		locale: "en_US",
		type: "website"
	},
	icons: {
		icon: [
			{
				url: "/logo-light.svg",
				media: "(prefers-color-scheme: light)"
			},
			{
				url: "/logo-dark.svg",
				media: "(prefers-color-scheme: dark)"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "Noowz | Bio Links",
		description: "Personal profile card that aggregates all the important links in one place. Easily access social media, projects, and content through this sleek, user-friendly page.",
		site: "@noowzgg",
		siteId: "1294781292622548994",
		creator: "@noowzgg",
		creatorId: "1294781292622548994",
		images: [
			{
				url: "https://i.imgur.com/PYzPs5X.png",
				alt: "Website Preview"
			}
		]
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<main>
						{children}
					</main>

					<Toaster />

					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
};