import { useState, useLayoutEffect } from 'react';

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState({
    scrollY: undefined,
  });

  useLayoutEffect(() => {
    function handleScroll() {
      setScrollY({
        scrollY: Math.round(window.scrollY),
      });
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollY;
};

export default useScrollPosition;
