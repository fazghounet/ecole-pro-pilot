
import React, { useState } from 'react';
import { Menu, X, Car, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <div className="bg-primary-500 p-2 rounded-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">AutoÉcole</h1>
              <p className="text-xs text-gray-500">Manager</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary-500 transition-colors">
              Accueil
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-500 transition-colors">
              Fonctionnalités
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-500 transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-gray-300" asChild>
              <a href="/login">
                <LogIn className="w-4 h-4 mr-2" />
                Connexion
              </a>
            </Button>
            <Button className="bg-primary-500 hover:bg-primary-600" asChild>
              <a href="/register">
                <UserPlus className="w-4 h-4 mr-2" />
                Inscription
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-primary-500 transition-colors">
                Accueil
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary-500 transition-colors">
                Fonctionnalités
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-500 transition-colors">
                À propos
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors">
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <Button variant="outline" className="w-full border-gray-300" asChild>
                  <a href="/login">
                    <LogIn className="w-4 h-4 mr-2" />
                    Connexion
                  </a>
                </Button>
                <Button className="w-full bg-primary-500 hover:bg-primary-600" asChild>
                  <a href="/register">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Inscription
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
