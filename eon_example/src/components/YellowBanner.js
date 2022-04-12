import React from "react";
import CtaBanner from "./CtaBanner";

export default function YellowBanner() {
    const buttonsArr = [
        ["first_btn", "https://ru.reactjs.org/docs/lists-and-keys.html"],
        ["scnd_btn", "https://preprod.eon.cz/test/test-dano/?fbclid=IwAR1lvaI60-xaxIMv_KysKS7ZuNH3TvLHLHmpfEMT_br4fiCgNrpXg4a6dKc"]]
    return (
        <div className="cta-banner__yellow">
            <CtaBanner 
                buttons = {buttonsArr}
                text = "Děkujeme následujícím partnerům za podporu letošního ročníku soutěže E.ON Energy Globe. Děkujeme následujícím partnerům za podporu letošního ročníku soutěže E.ON Energy Globe."
            />
        </div>
    )
}