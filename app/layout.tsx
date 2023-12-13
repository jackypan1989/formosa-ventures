import Link from "next/link"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { ModeToggle } from "@/components/mode-toggle"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Formosa Ventures - Propel Your Software Startup to Global Success",
  description: "Join Formosa Ventures to transform your software startup into a global legacy. Expertise in tech advisory, product strategy, operations, legal guidance, and fundraising assistance.",
  applicationName: "Formosa Ventures",
  metadataBase: new URL('https://formosa.ventures'),
  openGraph: {
    title: 'Formosa Ventures - Propel Your Software Startup to Global Success',
    description: 'Join Formosa Ventures to transform your software startup into a global legacy. Expertise in tech advisory, product strategy, operations, legal guidance, and fundraising assistance.',
    url: 'https://formosa.ventures',
    siteName: 'Formosa Ventures',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    type: 'website',
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-5 px-4">
            <header>
              <div className="flex items-center justify-between">
                <nav className="mr-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
