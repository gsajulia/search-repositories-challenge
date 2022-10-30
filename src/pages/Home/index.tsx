import { FC } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./styles.scss";
import * as I from "../../assets/icons";

const mission = [
    { title: "Our mission is", subtitle: "Nossa missão é" },
    { title: "to transform the world", subtitle: "transformar o mundo" },
    {
        title: "building digital experiences",
        subtitle: "construindo experiências digitais",
    },
    {
        title: "that enable our client’s growth",
        subtitle: "que permitam o crescimento dos nossos clientes",
    },
];
const Home: FC = () => {
    return (
        <>
            <Header />
            <div className="home-container">
                <div className="home-content">
                    <img src={I.uolBall} alt="oul ball" />
                    <div className="mission">
                        {mission.map(({ title, subtitle }, idx) => (
                            <>
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
                            </>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;
