import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { geistSans } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "Noowz | Bio Links",
	description: "Personal profile card that aggregates all the important links in one place. Easily access social media, projects, and content through this sleek, user-friendly page.",
	keywords: [
		"bio links",
		"profile card",
		"social media",
		"portfolio",
		"personal website",
		"link aggregator",
		"Noowz"
	],
	authors: [
		{
			name: "Noowz",
			url: "https://noowz.dev"
		}
	],
	publisher: "Noowz",
	robots: "index, follow",
	openGraph: {
		title: "Noowz | Bio Links",
		description: "Personal profile card that aggregates all the important links in one place. Easily access social media, projects, and content through this sleek, user-friendly page.",
		url: "https://noowz-bio-links.vercel.app",
		siteName: "Noowz | Bio Links",
		images: [
			{
				url: "https://i.imgur.com/fhc27JD.png",
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
				url: "https://i.imgur.com/fhc27JD.png",
				alt: "Website Preview"
			}
		]
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<body className={`${geistSans.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<main>
						{children}
					</main>

					<Toaster richColors closeButton />

					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
};