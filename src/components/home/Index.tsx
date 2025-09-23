import { useRef } from "react";
import { Header } from "../../main/layouts/TopBar/Header";
import { Footer } from "../../main/layouts/Footer/Footer";
import * as Section from "./sections";

export const Index = () => {

    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    const handleNavigate = (section: 'home' | 'about' | 'menu' | 'testimonials') => {
        const map = {
            home: homeRef,
            about: aboutRef,
            menu: menuRef,
            testimonials: testimonialsRef
        };

        map[section].current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Header onNavigate={handleNavigate} />
            <div ref={homeRef}>
                <Section.Home onNavigate={handleNavigate} />
                <Section.WPlace ref={aboutRef} />
                <Section.About />
                <Section.Menu ref={menuRef} />
                <Section.Testimonials ref={testimonialsRef}/>
            </div>
            <Footer />
        </>
    )
}
