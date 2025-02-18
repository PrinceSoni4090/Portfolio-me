import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
			{
				protocol: "https",
				hostname: "encrypted-tbn0.gstatic.com",
			},
			{
				protocol: "https",
				hostname: "appx-wsb-gcp-mcdn.akamai.net.in",
			},
			{
				protocol: "https",
				hostname: "sanityesports.vercel.app",
			},
			{
				protocol: "https",
				hostname: "assets.aceternity.com",
			},
		],
	},
};

export default nextConfig;
