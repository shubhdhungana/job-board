
import React, { useState } from 'react';
import { JobFilter as JobFilterType } from '../types/job';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { SlidersHorizontal, X } from 'lucide-react';

interface JobFilterProps {
  filters: JobFilterType;
  onFilterChange: (filters: JobFilterType) => void;
}

const JobFilter: React.FC<JobFilterProps> = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'];
  const experiences = ['Entry Level', 'Mid Level', 'Senior Level', 'Director', 'Executive'];
  const locations = ['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Remote'];
  const popularSkills = ['JavaScript', 'React', 'Node.js', 'Python', 'Django', 'Flutter', 'Java', 'PHP', 'Laravel', 'UI/UX'];

  const handleFilterChange = (type: keyof JobFilterType, value: string) => {
    const updatedFilters = { ...filters };
    
    if (!updatedFilters[type]) {
      updatedFilters[type] = [value];
    } else if (updatedFilters[type]?.includes(value)) {
      updatedFilters[type] = updatedFilters[type]?.filter(item => item !== value);
    } else {
      updatedFilters[type]?.push(value);
    }
    
    onFilterChange(updatedFilters);
  };

  const clearFilters = () => {
    onFilterChange({});
  };

  const filterCount = Object.values(filters).reduce((count, array) => 
    count + (array?.length || 0), 0);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <Button 
          variant="outline"
          className="md:hidden flex items-center text-jobscape-off-white border-jobscape-light-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          <SlidersHorizontal size={16} className="mr-2" />
          Filters
          {filterCount > 0 && (
            <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-jobscape-teal text-jobscape-dark-blue">
              {filterCount}
            </span>
          )}
        </Button>
        
        {filterCount > 0 && (
          <Button 
            variant="ghost" 
            className="text-jobscape-gray-blue hover:text-jobscape-off-white"
            onClick={clearFilters}
          >
            <X size={16} className="mr-2" />
            Clear filters
          </Button>
        )}
      </div>
      
      <motion.div 
        className={`grid grid-cols-1 md:grid-cols-4 gap-6 bg-jobscape-medium-blue rounded-lg p-6 border border-jobscape-light-blue ${isOpen ? 'block' : 'hidden md:grid'}`}
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 'auto', opacity: 1 }}
      >
        <div>
          <h3 className="font-medium text-jobscape-off-white mb-3">Job Type</h3>
          <div className="space-y-2">
            {jobTypes.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox 
                  id={`job-type-${type}`} 
                  checked={filters.jobType?.includes(type)}
                  onCheckedChange={() => handleFilterChange('jobType', type)}
                  className="border-jobscape-gray-blue data-[state=checked]:bg-jobscape-teal data-[state=checked]:border-jobscape-teal"
                />
                <label 
                  htmlFor={`job-type-${type}`}
                  className="text-sm text-jobscape-gray-blue"
                >
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-jobscape-off-white mb-3">Experience Level</h3>
          <div className="space-y-2">
            {experiences.map((exp) => (
              <div key={exp} className="flex items-center space-x-2">
                <Checkbox 
                  id={`exp-${exp}`} 
                  checked={filters.experience?.includes(exp)}
                  onCheckedChange={() => handleFilterChange('experience', exp)}
                  className="border-jobscape-gray-blue data-[state=checked]:bg-jobscape-teal data-[state=checked]:border-jobscape-teal"
                />
                <label 
                  htmlFor={`exp-${exp}`}
                  className="text-sm text-jobscape-gray-blue"
                >
                  {exp}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-jobscape-off-white mb-3">Location</h3>
          <div className="space-y-2">
            {locations.map((location) => (
              <div key={location} className="flex items-center space-x-2">
                <Checkbox 
                  id={`location-${location}`} 
                  checked={filters.location?.includes(location)}
                  onCheckedChange={() => handleFilterChange('location', location)}
                  className="border-jobscape-gray-blue data-[state=checked]:bg-jobscape-teal data-[state=checked]:border-jobscape-teal"
                />
                <label 
                  htmlFor={`location-${location}`}
                  className="text-sm text-jobscape-gray-blue"
                >
                  {location}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-jobscape-off-white mb-3">Skills</h3>
          <div className="space-y-2">
            {popularSkills.map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <Checkbox 
                  id={`skill-${skill}`} 
                  checked={filters.skills?.includes(skill)}
                  onCheckedChange={() => handleFilterChange('skills', skill)}
                  className="border-jobscape-gray-blue data-[state=checked]:bg-jobscape-teal data-[state=checked]:border-jobscape-teal"
                />
                <label 
                  htmlFor={`skill-${skill}`}
                  className="text-sm text-jobscape-gray-blue"
                >
                  {skill}
                </label>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default JobFilter;
