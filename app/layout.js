import { Inter } from 'next/font/google'
const inter = Inter({
  weight: "400", subsets: ["latin"]
})

//styles
import styles from "@/app/styles/min/Root.module.css"

export const metadata = {
  title: 'next-todo | chris-cybersec.dev',
  description: 'This is a simple Full-Stack next-todo App using nextjs 13 and MongoDb.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className} >
      <body className={styles.rootContainer}>{children}</body>
    </html>
  )
}
