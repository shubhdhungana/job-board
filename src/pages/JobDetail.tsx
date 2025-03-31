
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { jobs } from '@/data/jobs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Clock, BriefcaseIcon, Building2, ArrowLeft } from 'lucide-react';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find(job => job.id === id);
  
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-jobscape-off-white">Job Not Found</h2>
            <p className="text-jobscape-gray-blue mb-6">
              The job you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/jobs">
              <Button className="bg-jobscape-teal hover:bg-jobscape-teal-dark text-jobscape-dark-blue">
                Browse All Jobs
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/jobs" 
            className="inline-flex items-center text-jobscape-gray-blue hover:text-jobscape-teal mb-6"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to all jobs
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-jobscape-medium-blue rounded-lg border border-jobscape-light-blue p-8 mb-8"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <div className="flex items-center mb-2">
                  {job.featured && (
                    <Badge className="mr-2 bg-jobscape-highlight text-white">
                      Featured
                    </Badge>
                  )}
                  <span className="text-jobscape-gray-blue">
                    Posted {job.postedAt}
                  </span>
                </div>
                <h1 className="text-3xl font-bold mb-2 text-jobscape-off-white">{job.title}</h1>
                <p className="text-xl text-jobscape-teal mb-4">{job.company}</p>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-jobscape-gray-blue">
                    <MapPin size={16} className="mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-jobscape-gray-blue">
                    <BriefcaseIcon size={16} className="mr-1" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-jobscape-gray-blue">
                    <Building2 size={16} className="mr-1" />
                    {job.experience}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0">
                {job.salary && (
                  <p className="text-xl font-semibold text-jobscape-teal mb-4">{job.salary}</p>
                )}
                <div className="flex gap-3">
                  <Button className="bg-jobscape-teal hover:bg-jobscape-teal-dark text-jobscape-dark-blue">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="border-jobscape-light-blue hover:border-jobscape-teal text-jobscape-off-white">
                    Save Job
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator className="bg-jobscape-light-blue/30 mb-6" />
            
            <div className="flex flex-wrap gap-2 mb-6">
              {job.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-jobscape-light-blue text-jobscape-off-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-jobscape-medium-blue rounded-lg border border-jobscape-light-blue p-8 mb-8"
          >
            <h2 className="text-xl font-semibold mb-4 text-jobscape-off-white">Job Description</h2>
            <p className="text-jobscape-gray-blue mb-6 leading-relaxed">
              {job.description}
            </p>
            
            <h2 className="text-xl font-semibold mb-4 text-jobscape-off-white">Requirements</h2>
            <ul className="list-disc pl-5 mb-6 text-jobscape-gray-blue space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="leading-relaxed">{req}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold mb-4 text-jobscape-off-white">Responsibilities</h2>
            <ul className="list-disc pl-5 text-jobscape-gray-blue space-y-2">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="leading-relaxed">{resp}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-jobscape-medium-blue rounded-lg border border-jobscape-light-blue p-8 text-center"
          >
            <h2 className="text-xl font-semibold mb-4 text-jobscape-off-white">Interested in this job?</h2>
            <p className="text-jobscape-gray-blue mb-6">
              Submit your application now and take the next step in your career!
            </p>
            <Button size="lg" className="bg-jobscape-teal hover:bg-jobscape-teal-dark text-jobscape-dark-blue">
              Apply for this Position
            </Button>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetail;
