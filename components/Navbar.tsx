'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useTheme } from "../components/ThemeContext"
import { Moon, Sun, Menu, X } from 'lucide-react'

export function Navbar() {
  const { isDarkMode, toggleDarkMode } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-200">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image
              src="/Logo.jpg"
              alt="Neuron Logo"
              width={50}
              height={50}
              className="mr-3 rounded-full"
              priority
            />
            <motion.span 
              className="font-bold text-2xl text-purple-600 dark:text-purple-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Neuron
            </motion.span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Sobre Nos', 'Intercambio'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link 
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Login</Button>
          </motion.div>
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <motion.div 
        className="md:hidden"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
          {['Home', 'Sobre Nos', 'Intercambio'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  )
}

