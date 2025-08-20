import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

export interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  duration = 5000 
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const toastVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring" as const,
        stiffness: 500,
        damping: 30,
        delay: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={toastVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className={`
            fixed top-4 right-4 z-50 max-w-md w-full mx-auto
            ${type === 'success' 
              ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' 
              : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'
            }
            border rounded-xl shadow-lg backdrop-blur-sm
          `}
        >
          <div className="p-4">
            <div className="flex items-start">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                className="flex-shrink-0"
              >
                {type === 'success' ? (
                  <CheckCircleIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                ) : (
                  <XCircleIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
                )}
              </motion.div>
              
              <div className="ml-3 flex-1">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`
                    text-sm font-medium
                    ${type === 'success' 
                      ? 'text-green-800 dark:text-green-200' 
                      : 'text-red-800 dark:text-red-200'
                    }
                  `}
                >
                  {message}
                </motion.p>
              </div>
              
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className={`
                  ml-4 inline-flex flex-shrink-0 rounded-md p-1.5
                  ${type === 'success'
                    ? 'text-green-500 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-800/30'
                    : 'text-red-500 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-800/30'
                  }
                  focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${type === 'success' ? 'focus:ring-green-500' : 'focus:ring-red-500'}
                  transition-colors duration-200
                `}
              >
                <XMarkIcon className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
          
          {/* Progress bar */}
          {duration > 0 && (
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: duration / 1000, ease: "linear" }}
              className={`
                h-1 rounded-b-xl
                ${type === 'success' 
                  ? 'bg-green-500 dark:bg-green-400' 
                  : 'bg-red-500 dark:bg-red-400'
                }
              `}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
