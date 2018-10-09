import React, {Component} from 'react';
import ProgressBarContainer from './container'
import _Buttons from './buttons'
import _Bar from './bar'

const ErrorContainer = () => (
    <p>Error</p>
)

export {ProgressBarContainer as Container}
export {_Buttons as Buttons}
export {_Bar as Bar}


export default class ProgressBarFeature extends Component {

    state = {
        error: '',
    };

    componentDidMount() {
        // store.subscribe(() => {
        //     this.setState({
        //         error: store.getState().error
        //     });
        // })
    }

    render() {
        return (
            <div>
                {this.state.error && <ErrorContainer message={this.state.error}/>}
                <ProgressBarContainer/>
            </div>
        )
    }
}


