import type { Metadata } from "next";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Dwayne Bynum",
  description: "portfolio to showcase my skills as a developer!",
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