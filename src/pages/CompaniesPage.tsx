
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { jobs } from '@/data/jobs';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { BriefcaseIcon } from 'lucide-react';

const CompaniesPage = () => {
  // Extract unique companies and count their jobs
  const companies = jobs.reduce((acc, job) => {
    if (!acc[job.company]) {
      acc[job.company] = {
        name: job.company,
        jobCount: 1,
        jobs: [job]
      };
    } else {
      acc[job.company].jobCount += 1;
      acc[job.company].jobs.push(job);
    }
    return acc;
  }, {} as Record<string, { name: string; jobCount: number; jobs: typeof jobs }>);

  const companyList = Object.values(companies);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-12 text-center"
          >
            <h1 className="text-3xl font-bold mb-2 text-jobscape-off-white">Top Tech Companies in Kathmandu</h1>
            <p className="text-jobscape-gray-blue max-w-2xl mx-auto">
              Discover the leading tech employers in Nepal and explore their open positions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyList.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-jobscape-medium-blue rounded-lg border border-jobscape-light-blue overflow-hidden card-hover"
              >
                <div className="h-20 bg-gradient-to-r from-jobscape-dark-blue to-jobscape-light-blue"></div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-jobscape-off-white">{company.name}</h2>
                  
                  <div className="flex items-center mb-4">
                    <Badge variant="outline" className="flex items-center border-jobscape-light-blue">
                      <BriefcaseIcon size={14} className="mr-1 text-jobscape-teal" />
                      {company.jobCount} open position{company.jobCount !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2 text-jobscape-gray-blue">Recent jobs:</h3>
                    <ul className="space-y-2">
                      {company.jobs.slice(0, 3).map(job => (
                        <li key={job.id}>
                          <Link 
                            to={`/jobs/${job.id}`}
                            className="text-jobscape-off-white hover:text-jobscape-teal transition-colors"
                          >
                            {job.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={`/companies/${company.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-jobscape-teal hover:underline text-sm font-medium"
                  >
                    View company profile
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompaniesPage;
