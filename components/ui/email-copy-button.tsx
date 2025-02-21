"use client";

import type React from "react";

import { useState, useCallback } from "react";
import { Check, CopyIcon } from "lucide-react";

interface EmailCopyButtonProps {
	email: string;
}

export const EmailCopyButton: React.FC<EmailCopyButtonProps> = ({ email }) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = useCallback(() => {
		navigator.clipboard.writeText(email).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}, [email]);

	return (
		<div className="flex items-center justify-center gap-2 text-zinc-700 dark:text-zinc-400">
			<p className="text-base">{email}</p>
			<button
				onClick={copyToClipboard}
				className={`p-2 rounded-full transition-all duration-200 ease-in-out ${
					copied
						? "bg-green-500 text-white"
						: " hover:bg-gray-300 dark:hover:bg-gray-600"
				} ${copied ? "scale-110" : "scale-100"}`}
				aria-label={copied ? "Copied!" : "Copy email to clipboard"}
			>
				{copied ? (
					<Check className="w-5 h-5" />
				) : (
					<CopyIcon className="w-5 h-5" />
				)}
			</button>
		</div>
	);
};
