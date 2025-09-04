import { TopBar } from "../../main/layouts/TopBar/TopBar";
import { Footer } from "../../main/layouts/Footer/Footer";
import * as Section from "./sections";

export const Index = () => {
    return (
        <div>
            <TopBar />
            <Section.Home />
            {/* <Footer /> */}
        </div>
    )
}
