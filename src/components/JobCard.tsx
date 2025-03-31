
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Job } from '../types/job';
import { MapPin, Clock, BriefcaseIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/jobs/${job.id}`}>
        <div className="bg-jobscape-medium-blue rounded-lg p-6 border border-jobscape-light-blue card-hover">
          {job.featured && (
            <Badge className="mb-3 bg-jobscape-highlight text-white">
              Featured
            </Badge>
          )}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-jobscape-teal transition-colors">
            {job.title}
          </h3>
          <p className="text-jobscape-off-white mb-3">{job.company}</p>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center text-jobscape-gray-blue">
              <MapPin size={16} className="mr-1" />
              {job.location}
            </div>
            <div className="flex items-center text-jobscape-gray-blue">
              <BriefcaseIcon size={16} className="mr-1" />
              {job.type}
            </div>
            <div className="flex items-center text-jobscape-gray-blue">
              <Clock size={16} className="mr-1" />
              {job.postedAt}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.slice(0, 3).map((skill, i) => (
              <span 
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-jobscape-light-blue text-jobscape-off-white"
              >
                {skill}
              </span>
            ))}
            {job.skills.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-jobscape-light-blue text-jobscape-off-white">
                +{job.skills.length - 3} more
              </span>
            )}
          </div>
          
          {job.salary && (
            <p className="text-jobscape-teal font-medium">{job.salary}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default JobCard;
