import "./globals.css";
import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { Navbar } from "./components/nav";
import { Footer } from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: "Mahen Seneviratne's Portfolio",
        template: "%s | Mahen Seneviratne's Portfolio",
    },
    description:
        "Mahen Seneviratne's personal website for blog posts and photography.",
    openGraph: {
        title: "Mahen Seneviratne's Portfolio",
        siteName: "Mahen Seneviratne's Portfolio",
        description:
            "Mahen Seneviratne's personal website for blog posts and photography.",
        url: baseUrl,
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const cx = (...classes: any[]) => classes.filter(Boolean).join(" ");

const inter = Newsreader({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx(
                "text-black bg-white dark:text-white dark:bg-black",
                inter.className
            )}
        >
            <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
                <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
