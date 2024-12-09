import { ThemeProvider } from '@/components/ThemeContext'
import { RegisterProvider } from '../context/RegisterContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Neuron - Plataforma Educacional',
  description: 'Transforme sua educação com tecnologia avançada e oportunidades globais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RegisterProvider>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </RegisterProvider>
      </body>
    </html>
  )
}

