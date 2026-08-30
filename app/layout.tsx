import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Reposit",
  description: "Building an open, structured home for research, ideas, and intellectual work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
