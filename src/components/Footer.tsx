
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-jobscape-medium-blue border-t border-jobscape-light-blue mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">KathmanduTechJobs</h3>
            <p className="text-jobscape-gray-blue">
              Connecting Kathmandu's tech talent with the best opportunities in the industry.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-jobscape-off-white mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-jobscape-gray-blue">
              <li><Link to="/jobs" className="hover:text-jobscape-teal transition-colors">Browse Jobs</Link></li>
              <li><Link to="/companies" className="hover:text-jobscape-teal transition-colors">Companies</Link></li>
              <li><Link to="/profile" className="hover:text-jobscape-teal transition-colors">Create Profile</Link></li>
              <li><Link to="/saved-jobs" className="hover:text-jobscape-teal transition-colors">Saved Jobs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-jobscape-off-white mb-4">For Employers</h4>
            <ul className="space-y-2 text-jobscape-gray-blue">
              <li><Link to="/post-job" className="hover:text-jobscape-teal transition-colors">Post a Job</Link></li>
              <li><Link to="/pricing" className="hover:text-jobscape-teal transition-colors">Pricing</Link></li>
              <li><Link to="/employer-resources" className="hover:text-jobscape-teal transition-colors">Resources</Link></li>
              <li><Link to="/employer-login" className="hover:text-jobscape-teal transition-colors">Employer Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-jobscape-off-white mb-4">Company</h4>
            <ul className="space-y-2 text-jobscape-gray-blue">
              <li><Link to="/about" className="hover:text-jobscape-teal transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-jobscape-teal transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-jobscape-teal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-jobscape-teal transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-jobscape-light-blue/30 text-center text-jobscape-gray-blue">
          <p>&copy; {new Date().getFullYear()} KathmanduTechJobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
