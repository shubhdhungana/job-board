
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Menu, X, Briefcase, Building2, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-blur border-b border-jobscape-light-blue">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold mr-8 text-gradient"
          >
            KathmanduTechJobs
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/jobs" 
              className="flex items-center text-jobscape-off-white hover:text-jobscape-teal transition-colors"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Jobs
            </Link>
            <Link 
              to="/companies" 
              className="flex items-center text-jobscape-off-white hover:text-jobscape-teal transition-colors"
            >
              <Building2 className="mr-2 h-4 w-4" />
              Companies
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center text-jobscape-off-white hover:text-jobscape-teal transition-colors"
            >
              <User className="mr-2 h-4 w-4" />
              For Job Seekers
            </Link>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-jobscape-gray-blue" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="pl-10 pr-4 py-2 bg-jobscape-medium-blue border border-jobscape-light-blue rounded-md focus:outline-none focus:ring-1 focus:ring-jobscape-teal"
            />
          </div>
          <Button 
            className="bg-jobscape-teal hover:bg-jobscape-teal-dark text-jobscape-dark-blue"
          >
            Post a Job
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-jobscape-off-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-jobscape-medium-blue border-t border-jobscape-light-blue animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/jobs" 
              className="flex items-center text-jobscape-off-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Jobs
            </Link>
            <Link 
              to="/companies" 
              className="flex items-center text-jobscape-off-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Building2 className="mr-2 h-4 w-4" />
              Companies
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center text-jobscape-off-white py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="mr-2 h-4 w-4" />
              For Job Seekers
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-jobscape-gray-blue" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 bg-jobscape-medium-blue border border-jobscape-light-blue rounded-md focus:outline-none focus:ring-1 focus:ring-jobscape-teal"
              />
            </div>
            <Button 
              className="w-full bg-jobscape-teal hover:bg-jobscape-teal-dark text-jobscape-dark-blue"
            >
              Post a Job
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
