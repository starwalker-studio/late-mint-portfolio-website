import { TopBar } from "../../main/layouts/TopBar/TopBar";
import { Footer } from "../../main/layouts/Footer/Footer";
import * as Section from "./sections";

export const Index = () => {
    return (
        <div>
            <TopBar />
            <Section.Home />
            <Section.WPlace />
            <Section.About />
            <Section.Menu />
            <Section.Testimonials />
            {/* <Footer /> */}
        </div>
    )
}
