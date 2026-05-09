import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ophir Engineers and Consultants (OPC) Pvt Ltd | Electrical Engineering Consultancy & EPC",
  description:
    "Ophir Engineers and Consultants is a premier Electrical Engineering Consultancy and EPC firm delivering precise, reliable, and code-compliant engineering solutions. Services include electrical design, testing & commissioning, and turnkey EPC projects.",
  keywords: [
    "Ophir Engineers",
    "Electrical Engineering",
    "Consultancy",
    "EPC",
    "Electrical Design",
    "HT/LT Systems",
    "Substation",
    "Solar PV",
    "Arc Flash Analysis",
    "Hyderabad",
    "India",
  ],
  authors: [{ name: "Ophir Engineers and Consultants (OPC) Pvt Ltd" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Ophir Engineers and Consultants (OPC) Pvt Ltd",
    description:
      "Premier Electrical Engineering Consultancy and EPC firm delivering precise, reliable, and code-compliant engineering solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
