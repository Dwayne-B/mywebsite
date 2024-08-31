import type { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
	title: "Dwayne Bynum",
	description: "portfolio to showcase my skills as a developer!",
	icons: {
		icon: "/favicon-32x32.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className=''>
				<div className='wrapper'>{children}</div>
			</body>
		</html>
	);
}
