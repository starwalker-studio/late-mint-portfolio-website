import { useState, useEffect } from "react";

export const useScrollDown = () => {

    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY <= 50) {
                setScrolled(false);
                setHidden(false);
            } else {
                setScrolled(true);
                if (currentScrollY > lastScrollY) {
                    setHidden(true);
                } else {
                    setHidden(false);
                }
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navbarEffects = {
        initial: { y: 0 },
        visible: { y: 0 },
        hidden: { y: -100 }
    }

    const navbarTransition = {
        transition: { duration: 0.3, ease: 'easeInOut' }
    }

    return {
        scrolled,
        hidden,
        navbarEffects,
        navbarTransition
    }

}