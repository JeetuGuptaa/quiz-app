import React from "react";
import ReactLoading from "react-loading";
const Loading = (props) => {
    const type = "spokes";
    const color = "black";
    return (
        <div className="loading">
            <ReactLoading type={type} color={color} height={100} width={100} />
            <div id="padding">{props.message}</div>
        </div>
    );
};

export default Loading;
