import { FC, useEffect, useState, useCallback } from "react";
import * as I from "../../assets/icons";
import "./styles.scss";
import { WetherInfo } from "./types";
import { getWether } from "../../api/Wether";

const Header: FC = () => {
    const [status, setStatus] = useState<string | null>(null);
    const [wetherInfo, setWetherInfo] = useState<WetherInfo | null>(null);
    const formattedDate = new Date().toLocaleString("pt-br", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const hour = new Date().toLocaleTimeString("pt-br", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
    });
    const getWetherInfo = async (url: string) => {
        try {
            const { data } = await getWether(url);
            console.log(data);
            const matches = data.location.region.match(/\b(\w)/g); // ['J','S','O','N']
            const state = matches.join("");
            const location = `${data.location.name} - ${state}`;
            setWetherInfo({
                location,
                degrees: data.current.feelslike_c,
            });
        } catch (e) {
            setStatus("Algo deu errado em ver o clima...");
        }
    };

    const getLocation = useCallback(() => {
        if (!navigator.geolocation) {
            setStatus("Geolocation não é suportada pelo browser");
        } else {
            setStatus("Carregando...");
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setStatus(null);
                    if (process.env.REACT_APP_CLIMATE_TOKEN === undefined) {
                        setStatus("Algo deu errado em ver o clima...");
                        return;
                    }
                    getWetherInfo(
                        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_CLIMATE_TOKEN}&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`
                    );
                    console.log(position.coords.latitude);
                    console.log(position.coords.longitude);
                },
                () => {
                    setStatus("Não foi possível pegar sua localização");
                }
            );
        }
    }, []);

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    return (
        <header className="header-container home-mobile">
            <img
                className="header-compass-logo"
                src={I.compassLogoBlack}
                alt="Compass Logo"
            />
            <div className="header-time">
                <h1>{hour}</h1>
                <div>{formattedDate}</div>
            </div>
            <div className="climate-container">
                <div className="climate-text">
                    {wetherInfo ? wetherInfo.location : status}
                </div>
                <div className="climate-content-container">
                    <img src={I.climate} alt="climate cloudy icon" />
                    <div className="climate-text-number">
                        {wetherInfo && `${parseInt(wetherInfo.degrees)}º`}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
