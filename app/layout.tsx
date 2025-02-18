import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import { ReactLenis } from "lenis/react";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<ReactLenis root>
				<body
					className={`${inter.className} font-sans antialiased w-11/12 w-4xl max-w-4xl mx-auto bg-white dark:bg-black text-white`}
				>
					<ThemeProvider
						attribute={"class"}
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Navbar />
						<div className=" mt-32">{children}</div>
					</ThemeProvider>
				</body>
			</ReactLenis>
		</html>
	);
}
