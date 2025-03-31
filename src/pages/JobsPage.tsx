
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobCard from '@/components/JobCard';
import JobFilter from '@/components/JobFilter';
import { jobs } from '@/data/jobs';
import { Job, JobFilter as JobFilterType } from '@/types/job';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';

const JobsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSkills = searchParams.get('skills') ? [searchParams.get('skills') as string] : undefined;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<JobFilterType>({
    skills: initialSkills
  });
  
  const filterJobs = (jobs: Job[]): Job[] => {
    return jobs.filter(job => {
      // Search term filter
      if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !job.company.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !job.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Job type filter
      if (filters.jobType && filters.jobType.length > 0 && !filters.jobType.includes(job.type)) {
        return false;
      }
      
      // Experience filter
      if (filters.experience && filters.experience.length > 0 && !filters.experience.includes(job.experience)) {
        return false;
      }
      
      // Location filter
      if (filters.location && filters.location.length > 0 && !filters.location.includes(job.location)) {
        return false;
      }
      
      // Skills filter
      if (filters.skills && filters.skills.length > 0 && 
          !job.skills.some(skill => filters.skills?.includes(skill))) {
        return false;
      }
      
      return true;
    });
  };
  
  const filteredJobs = filterJobs(jobs);
  
  const handleFilterChange = (newFilters: JobFilterType) => {
    setFilters(newFilters);
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the filterJobs function
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2 text-jobscape-off-white">Browse IT Jobs in Kathmandu</h1>
            <p className="text-jobscape-gray-blue">
              Find your next tech opportunity from {jobs.length} open positions
            </p>
          </motion.div>
          
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-jobscape-gray-blue" />
              <Input
                type="text"
                placeholder="Search job title, company or keywords..."
                className="pl-10 py-6 bg-jobscape-medium-blue border border-jobscape-light-blue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
          
          <JobFilter filters={filters} onFilterChange={handleFilterChange} />
          
          <div className="mb-6">
            <p className="text-jobscape-gray-blue">
              Showing {filteredJobs.length} jobs
            </p>
          </div>
          
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2 text-jobscape-off-white">No jobs found</h3>
              <p className="text-jobscape-gray-blue mb-6">
                Try adjusting your search filters or search term.
              </p>
              <Button 
                variant="outline" 
                className="border-jobscape-teal text-jobscape-teal"
                onClick={() => {
                  setFilters({});
                  setSearchTerm('');
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobsPage;
