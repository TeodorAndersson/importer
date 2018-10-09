import {Button} from "semantic-ui-react";
import React from "react";
import {Core} from "Packages/eos/core";

const Buttons = ({theme, increment, decrement}) => (
    <div>
        { theme }
        <Button positive onClick={() => increment()} icon="plus" />
        <Button negative onClick={() => decrement()} icon="minus" />
    </div>
)

export default Core.ComponentLoader.connect(Buttons)

