import { useEffect, useState } from 'react';

const useLayout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  useEffect(() => {
    setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
  }, [userAgent]);

  return {
    isMobile,
  };
};

export default useLayout;
