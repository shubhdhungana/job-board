
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { jobs } from '@/data/jobs';
import JobCard from '@/components/JobCard';
import { ArrowRight, BriefcaseIcon, Building2, TrendingUp, Search } from 'lucide-react';

const Index = () => {
  const featuredJobs = jobs.filter(job => job.featured).slice(0, 3);
  const popularCompanies = ['Leapfrog Technology', 'F1Soft International', 'CloudFactory', 'Cotiviti Nepal', 'Fusemachines Nepal', 'Deerwalk Services'];
  const popularTechs = ['React', 'Python', 'Flutter', 'DevOps', 'UI/UX', 'Java', 'Data Science'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-jobscape-dark-blue pt-16 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-jobscape-off-white">
              Find Your Next <span className="text-gradient">Tech Job</span> in Kathmandu
            </h1>
            <p className="text-xl text-jobscape-gray-blue max-w-3xl mx-auto mb-10">
              Discover opportunities with the best tech companies in Nepal's growing IT industry.
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-jobscape-gray-blue" />
              <input
                type="text"
                placeholder="Search for jobs (e.g., 'React Developer')"
                className="w-full pl-12 pr-4 py-3 rounded-full bg-jobscape-medium-blue border border-jobscape-light-blue focus:outline-none focus:ring-2 focus:ring-jobscape-teal text-jobscape-off-white"
              />
              <Button 
                className="absolute right-1 top-1 bg-jobscape-teal hover:bg-jobscape-teal-dark text-jobscape-dark-blue rounded-full px-6"
              >
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {popularTechs.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link to={`/jobs?skills=${tech}`}>
                    <span className="inline-block px-4 py-2 rounded-full bg-jobscape-medium-blue border border-jobscape-light-blue text-jobscape-gray-blue hover:border-jobscape-teal hover:text-jobscape-teal transition-colors">
                      {tech}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Jobs Section */}
      <section className="py-16 px-4 bg-jobscape-medium-blue">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <TrendingUp className="text-jobscape-teal mr-3" />
              <h2 className="text-2xl font-bold text-jobscape-off-white">Featured Jobs</h2>
            </div>
            <Link to="/jobs">
              <Button variant="link" className="text-jobscape-teal">
                View all jobs <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-jobscape-off-white">Why Use KathmanduTechJobs</h2>
            <p className="text-jobscape-gray-blue max-w-3xl mx-auto">
              The premier platform for tech professionals and companies in Nepal's growing IT hub.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-jobscape-medium-blue rounded-lg p-6 border border-jobscape-light-blue"
            >
              <div className="w-12 h-12 bg-jobscape-dark-blue rounded-full flex items-center justify-center mb-4">
                <BriefcaseIcon className="text-jobscape-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-jobscape-off-white">Latest Tech Jobs</h3>
              <p className="text-jobscape-gray-blue">
                Access the newest opportunities from top tech companies in Kathmandu, updated daily.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-jobscape-medium-blue rounded-lg p-6 border border-jobscape-light-blue"
            >
              <div className="w-12 h-12 bg-jobscape-dark-blue rounded-full flex items-center justify-center mb-4">
                <Building2 className="text-jobscape-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-jobscape-off-white">Top Tech Companies</h3>
              <p className="text-jobscape-gray-blue">
                Connect with leading employers in Nepal's tech industry looking for skilled professionals.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-jobscape-medium-blue rounded-lg p-6 border border-jobscape-light-blue"
            >
              <div className="w-12 h-12 bg-jobscape-dark-blue rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-jobscape-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-jobscape-off-white">Career Growth</h3>
              <p className="text-jobscape-gray-blue">
                Find opportunities that match your skills and advance your career in tech.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Top Companies Section */}
      <section className="py-16 px-4 bg-jobscape-medium-blue">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-jobscape-off-white">Top Companies Hiring</h2>
            <p className="text-jobscape-gray-blue max-w-3xl mx-auto">
              Leading tech companies in Kathmandu that are actively looking for talent.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularCompanies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-jobscape-dark-blue rounded-lg p-6 flex items-center justify-center border border-jobscape-light-blue hover:border-jobscape-teal transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-center text-jobscape-off-white">{company}</h3>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/companies">
              <Button className="bg-jobscape-dark-blue hover:bg-jobscape-light-blue text-jobscape-off-white border border-jobscape-light-blue hover:border-jobscape-teal transition-colors">
                View All Companies
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-jobscape-light-blue to-jobscape-medium-blue rounded-2xl p-10 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-jobscape-off-white">Ready to Find Your Next Tech Job?</h2>
            <p className="text-jobscape-gray-blue max-w-3xl mx-auto mb-8">
              Browse hundreds of IT jobs from top companies in Kathmandu and take the next step in your tech career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button className="bg-jobscape-teal hover:bg-jobscape-teal-dark text-jobscape-dark-blue px-8 py-6 text-lg">
                  Browse Jobs
                </Button>
              </Link>
              <Link to="/post-job">
                <Button variant="outline" className="border-jobscape-teal text-jobscape-teal hover:bg-jobscape-teal/10 px-8 py-6 text-lg">
                  Post a Job
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
