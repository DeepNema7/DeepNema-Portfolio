import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deep Nema — AI, Data & Software",
  description:
    "Portfolio of Deep Nema — AI, data and full-stack software developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 