import React from "react";
import ReactLoading from "react-loading";
const Loading = () => {
    const type = "spokes";
    const color = "black";
    return (
        <div className="loading">
            <ReactLoading type={type} color={color} height={100} width={100} />
            <div id="padding">Loading</div>
        </div>
    );
};

export default Loading;
