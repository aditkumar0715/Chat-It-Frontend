import React from 'react'
import { Github, Linkedin, Coffee, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 text-gray-600 dark:bg-gray-900 dark:text-gray-300">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Brand and Copyright */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              CHAT-IT
            </h1>
            <p className="mt-2 text-sm">
              Built with ❤️ for secure and ad-free communication.
            </p>
          </div>

          {/* Developer Profile Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/aditkumar0715"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://linkedin.com/in/aditkumar0715"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="https://www.buymeacoffee.com/aditkumar0715"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-600 dark:hover:text-yellow-500"
              aria-label="Buy Me A Coffee"
            >
              <Coffee className="h-6 w-6" />
            </a>

            <a
              href="https://twitter.com/aditkumar0715"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 dark:hover:text-blue-500"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-6 border-gray-300 dark:border-gray-700" />

        {/* Bottom Footer */}
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} CHAT-IT. All rights reserved.</p>
          <p>
            Made by{' '}
            <a
              href="https://github.com/aditkumar0715"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 dark:hover:text-blue-400"
            >
              Aditya Kumar (Giri)
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
