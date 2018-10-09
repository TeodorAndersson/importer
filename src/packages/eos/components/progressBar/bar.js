import {Progress} from "semantic-ui-react";
import React from "react";
import ProgressButtons from "./buttons";
import {Core} from "Packages/eos/core";

const Bar = ({percent, increment, decrement, reset, ...props}) => {
    console.log(props);

    const { ProgressButtons } = props.Components;

    if(!ProgressButtons){
        return <p>Loading</p>
    }

    return (
        <div>
            <Progress percent={percent} indicating/>
            <ProgressButtons increment={increment} decrement={decrement} reset={reset}/>
        </div>)
};

export default Core.ComponentLoader.connect(Bar)

