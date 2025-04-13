import React from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-background flex grow items-center justify-center px-4">
      <div className="max-w-2xl space-y-6 text-center">
        {/* Funny SVG Illustration */}
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_1280.png"
            alt="Funny Illustration"
            className="h-48 w-48 animate-bounce"
          />
        </div>

        {/* 404 Heading */}
        <h1 className="text-foreground text-4xl font-extrabold md:text-6xl">
          Page Not Found
        </h1>

        {/* Funny Message */}
        <p className="text-muted-foreground text-lg md:text-xl">
          Uh-oh! Looks like you've stumbled into the void. The page you're
          looking for has been abducted by aliens! 👽
        </p>

        {/* Back to Home Button */}
        <Link to="/">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 text-lg font-medium">
            Take Me Home 🏠
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
