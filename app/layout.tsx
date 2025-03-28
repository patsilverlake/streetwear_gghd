import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { Logo } from "@/components/logo"
import { CustomCursor } from "@/components/custom-cursor"
import { CartProvider } from "@/context/cart-context"
import { CartIcon } from "@/components/cart-icon"
import { CartDropdown } from "@/components/cart-dropdown"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GGHD - Atelier de Couture",
  description: "Premium Streetwear et Fashion Homme",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-gray-100`}>
        <CartProvider>
          <SplashScreen />
          <header className="fixed top-0 left-0 w-full z-40 px-4 py-4 flex justify-between items-center">
            <div className="flex-1">{/* Logo is centered in the middle of the page */}</div>
            <div className="flex-1 flex justify-center">
              <Logo />
            </div>
            <div className="flex-1 flex justify-end">
              <CartIcon />
            </div>
          </header>
          {children}
          <footer className="w-full py-6 px-4 bg-dark-600 text-gray-400">
            <div className="container mx-auto text-center">
              <p>&copy; GGHD. All rights reserved.</p>
            </div>
          </footer>
          <CartDropdown />
          <CustomCursor />
        </CartProvider>
      </body>
    </html>
  )
}



import './globals.css'