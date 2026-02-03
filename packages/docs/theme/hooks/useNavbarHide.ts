import { useState, useEffect } from "react";

export const useNavbarHide = (threshold = 100) => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < threshold) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY) {
        // 向下滚动
        setIsHidden(true);
      } else {
        // 向上滚动
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, threshold]);

  return isHidden;
};
