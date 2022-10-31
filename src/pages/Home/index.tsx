import { FC } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MobileFooter from "../../components/Footer/MobileFooter";

import "./styles.scss";
import * as I from "../../assets/icons";

const mission = [
    { id: 0, title: "Our mission is", subtitle: "Nossa missão é" },
    { id: 1, title: "to transform the world", subtitle: "transformar o mundo" },
    {
        id: 2, 
        title: "building digital experiences",
        subtitle: "construindo experiências digitais",
    },
    {
        id: 3, 
        title: "that enable our client’s growth",
        subtitle: "que permitam o crescimento dos nossos clientes",
    },
];
const Home: FC = () => { 
    return (
        <div className="home-container home-mobile">
            <Header />
            <div>
                <div className="home-content">
                    <img src={I.uolBall} alt="oul ball" />
                    <div className="mission">
                        {mission.map(({ id, title, subtitle }, idx) => (
                            <div key={id}>
                                <div
                                    className={
                                        idx === 0
                                            ? "small-mission-title"
                                            : "mission-title"
                                    }
                                >
                                    {title}
                                </div>
                                <div className="mission-subtitle">
                                    {subtitle}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
                <MobileFooter />
            </div>
        </div>
    );
};

export default Home;
