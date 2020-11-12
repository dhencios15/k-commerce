import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';

const ThemedSuspense = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });
  return (
    <div className='w-full h-screen p-6 text-lg text-center font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900'>
      Loading...
    </div>
  );
};

export default ThemedSuspense;
