import { Header } from "../../main/layouts/TopBar/Header";
import { Footer } from "../../main/layouts/Footer/Footer";
import * as Section from "./sections";

export const Index = () => {
    return (
        <div>
            <Header />
            <Section.Home />
            <Section.WPlace />
            <Section.About />
            <Section.Menu />
            {/* <Section.Testimonials />
            <Footer /> */}
        </div>
    )
}
