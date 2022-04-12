import React from "react";

export default function CtaBanner(props) {
    const btnArr = props.buttons;
    return (
        <div className="cta-banner">
            <div className="cta-banner__text">
                {props.text}
            </div>
            <div className="cta-banner__buttons" >
               {btnArr.map(btnArr => (<a href={btnArr[1]} id={btnArr[0]} className="cta-banner__button" target="_blank">Link Button</a>))}
            </div>
        </div>
    )
}