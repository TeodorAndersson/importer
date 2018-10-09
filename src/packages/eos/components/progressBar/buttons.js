import {Button} from "semantic-ui-react";
import React from "react";

const Buttons = ({theme, increment, decrement}) => (
    <div>
        { theme }
        <Button positive onClick={() => increment()} icon="plus" />
        <Button negative onClick={() => decrement()} icon="minus" />
    </div>
)

export default Buttons

