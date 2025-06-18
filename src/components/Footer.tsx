import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p className="flex items-center">
              Made with ❤️ by Pranav Arya
            </p>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2025 Pranav Arya. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;