import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Portfolio — Public Data, Beautiful Tools",
  description: "Tracking our portfolio of consumer tools built on free public data.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
