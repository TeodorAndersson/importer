import React from 'react'
import {Button} from "semantic-ui-react";


export const ProgressButtons = ({increment, decrement, reset}) => (
    <div>
        <Button positive onClick={() => increment()} icon="plus" />
        <Button negative onClick={() => decrement()} icon="minus" />
        <Button secondary onClick={() => reset()} icon="undo" />
    </div>
)