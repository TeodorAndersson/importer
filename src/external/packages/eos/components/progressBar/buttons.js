import {Button} from "semantic-ui-react";
import React from "react";
import Core from "core";

const ProgressButtons = ({increment, decrement}) => (
    <div>
        <Button positive onClick={() => increment()} icon="plus"/>
        <Button negative onClick={() => decrement()} icon="minus"/>
    </div>
)

export default Core.connect(ProgressButtons)

