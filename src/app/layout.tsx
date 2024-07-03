import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Banner from "@/components/Banner";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

const generalSans = localFont({
    src: "./fonts/GeneralSans-Variable.ttf",
    display: "swap",
    fallback: ["system-ui", "arial"],
    variable: "--font-general-sans",
});

export const metadata: Metadata = {
    title: "Owais Shariff • Security Researcher & Developer",
    description:
        "Owais Shariff is a Security Researcher and Developer.",
    metadataBase: new URL("https://osh.fyi"),
    openGraph: {
        title: "Owais Shariff • Security Maverick",
        description:
            "Security Researcher, Developer, and ML enthusiast.",
        url: "https://osh.fyi",
        siteName: "Owais Shariff Portfolio Website",
        images: {
            url: "/opengraph-image.png",
            width: 1920,
            height: 960,
            alt: "Owais Shariff: Security Researcher & Developer",
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body
                className={`${generalSans.variable} ${spaceGrotesk.variable}`}
            >
                <Navigation />
                {children}
            </body>
        </html>
    );
}
