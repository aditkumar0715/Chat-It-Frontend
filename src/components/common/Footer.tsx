import React from 'react';
import { Github, Linkedin, Coffee, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Brand and Copyright */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-foreground text-2xl font-bold">
              <Logo />
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
              className="hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>

            <a
              href="https://linkedin.com/in/aditkumar0715"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="https://www.buymeacoffee.com/aditkumar0715"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Buy Me A Coffee"
            >
              <Coffee className="h-6 w-6" />
            </a>

            <a
              href="https://twitter.com/aditkumar0715"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-border my-6" />

        {/* Bottom Footer */}
        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} <Logo />. All rights reserved.
          </p>
          <p>
            Made by{' '}
            <a
              href="https://github.com/aditkumar0715"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary underline"
            >
              Aditya Kumar (Giri)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
