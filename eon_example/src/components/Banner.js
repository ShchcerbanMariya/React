import React from "react";
import OptionsDropdown from "./OptionsDropdown";
import opt from "../OptionsData";
import PopUp from "../components/PopUp";


export default function Banner() {
    const optArr = opt.data.options;
    console.log(optArr.name)
    return (
        <header role="banner" className="header">
            <div className="header_inner">
                <div className="header--controle">
                    <OptionsDropdown />
                    <a id="cta-5351ac9b-610c-4298-9693-3db500a2233f-1" class="header__app" href="https://login.eon.cz/prihlaseni/e24" target="_blank">
                        Energie24
                    </a>
                    <button className="heder-button" id="header--search" aria-label="search"></button>
                </div>
                <div>
                    <p className="header--logo"><a id="e_on--logo" href="https://www.eon.cz/domacnosti/">E·ON</a></p>
                </div>
            </div>
        </header>
    )
}