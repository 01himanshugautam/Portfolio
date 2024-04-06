import { Inter } from "next/font/google"

import "../../public/style/globals.css"
import "../../public/style/Home.module.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Himanshu Gautam Resume",
  description: "Himanshu Gautam Resume",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
