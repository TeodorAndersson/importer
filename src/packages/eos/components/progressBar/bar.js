import { Progress } from "semantic-ui-react";
import React from "react";
import { Core } from "Packages/eos";

const Bar = ({ percent, increment, decrement, reset, ...props }) => {
    console.log(props);

    const { ProgressButtons } = props.Components;

    if (!ProgressButtons) {
        return <p>Loading</p>
    }

    return (
        <div>
            <Progress percent={percent} indicating />
            <ProgressButtons increment={increment} decrement={decrement} reset={reset} />
        </div>)
};

export default Core.connect(Bar)

