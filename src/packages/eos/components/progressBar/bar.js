import {Progress} from "semantic-ui-react";
import React from "react";
import ProgressButtons from "./buttons";

const Bar = ({percent, increment, decrement}) => (
    <div>
        <Progress percent={percent} indicating/>
        <ProgressButtons increment={increment} decrement={decrement}/>
    </div>
);

export default Bar
