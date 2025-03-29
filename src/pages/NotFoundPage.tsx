
import React from 'react'
import { Link } from 'react-router'
import { Button } from '@/components/ui/button'


const NotFoundPage: React.FC = () => {
  return (
    <div className="flex grow items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="max-w-2xl space-y-6 text-center">
        {/* Funny SVG Illustration */}
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png" // Replace with your SVG URL
            alt="Funny Illustration"
            className="h-48 w-48 animate-bounce"
          />
        </div>

        {/* 404 Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 md:text-6xl dark:text-white">
          Page Not Found
        </h1>

        {/* Funny Message */}
        <p className="text-lg text-gray-600 md:text-xl dark:text-gray-400">
          Uh-oh! Looks like you've stumbled into the void. The page you're
          looking for has been abducted by aliens! 👽
        </p>

        {/* Back to Home Button */}
        <Link to="/">
          <Button className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700">
            Take Me Home 🏠
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
