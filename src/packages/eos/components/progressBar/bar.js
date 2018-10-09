import {Progress} from "semantic-ui-react";
import React from "react";
import ProgressButtons from "./buttons";
import {Core} from "Packages/eos/core";

const Bar = ({percent, increment, decrement, ...props}) => {
    console.log(props);
    const { Progress, ProgressButtons } = props.Components;

    if(!ProgressButtons || !Progress){
        return <p>Loading</p>
    }

    return (
        <div>
            <Progress percent={percent} indicating/>
            <ProgressButtons increment={increment} decrement={decrement}/>
        </div>)
};

export default Core.ComponentLoader.connect(Bar)

