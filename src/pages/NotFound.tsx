
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-jobscape-dark-blue p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <h1 className="text-8xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-2xl text-jobscape-off-white mb-6">Oops! Page not found</p>
        <p className="text-jobscape-gray-blue mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-jobscape-teal hover:bg-jobscape-teal-dark text-jobscape-dark-blue">
            Return to Homepage
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
