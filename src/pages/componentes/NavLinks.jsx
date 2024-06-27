import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

export const NavLinks = () =>
  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
    });
  }, []);
