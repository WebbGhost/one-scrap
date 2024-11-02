'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, RefreshCw } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-white/50 backdrop-blur">
        <CardContent className="p-6">
          <div className="space-y-8 text-center">
            {/* Large 404 Text */}
            <div className="relative">
              <h1 className="text-9xl font-bold text-gray-200">404</h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-medium text-gray-800">
                  Oops! Page Not Found
                </span>
              </div>
            </div>

            {/* Animated Icon */}
            <div className="flex justify-center">
              <RefreshCw 
                className="w-16 h-16 text-gray-400 animate-spin"
                style={{ animationDuration: '3s' }}
              />
            </div>

            {/* Message */}
            <div className="space-y-4">
              <p className="text-gray-600 max-w-md mx-auto">
                The page you're looking for seems to have gone on vacation. 
                Don't worry, these things happen to the best of us.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="default"
                size="lg"
                className="space-x-2"
                onClick={() => window.history.back()}
              >
                <RefreshCw className="w-4 h-4" />
                <span>Go Back</span>
              </Button>

              <Button 
                variant="outline"
                size="lg"
                className="space-x-2"
                onClick={() => window.location.href = '/'}
              >
                <Home className="w-4 h-4" />
                <span>Home Page</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
