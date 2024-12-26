import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TODO APP",
  description: "TODO APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body monica-locale="ko">{children}</body>
    </html>
  );
}
