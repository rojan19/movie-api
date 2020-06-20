import {ImgSize, Medium} from "../../enums";
import React, {useState} from "react";
import {ErrorMsgPanel} from "../ErrorMsgPanel";

export function PosterItem(props) {
    const [imageAvailable, setImageAvailable] = useState(true);
    const itemWidth = "20vh";

    const containerStyle = {
        fontSize: "1.8vh",
        display: "flex",
        flexFlow: "column",
        textAlign: "center",
        width: itemWidth,
        marginRight: "0.5vh",
    };

    const imageStyle = {
        width: itemWidth,
        height: "30vh",
        marginRight: "0.5vh",
        marginBottom: "0.3vh",
    };

    let title = props.title && props.title.length > 32 ? props.title.substring(0, 32) + "..." : props.title;
    const src = Medium.IMG + ImgSize.SMALL + props.imgSrc;
    const img = <img src={src} alt={"poster of " + props.title} style={imageStyle} onError={() => setImageAvailable(false)}/>;


    return (
        <div style={containerStyle}>
            {imageAvailable ? img : <div style={imageStyle}><ErrorMsgPanel message={"Picture not available"}/></div>}
            <span>{title}</span>
        </div>
    )
};
