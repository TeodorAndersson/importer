import React, { Component } from 'react';
import ProgressBarContainer from './container'
import _Buttons from './buttons'
import _Bar from './bar'
import  Core  from "core";

const ErrorContainer = () => (
    <p>Error</p>
)

export { ProgressBarContainer as Container }
export { _Buttons as Buttons }
export { _Bar as Bar }


class ProgressBarFeature extends Component {

    state = {
        error: '',
    };

    render() {
        return (
            <div>
                {this.state.error && <ErrorContainer message={this.state.error} />}
                <ProgressBarContainer />
            </div>
        )
    }
}

export default Core.connect(ProgressBarFeature)
