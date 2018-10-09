import {decrementRequested, incrementRequested, resetRequested} from "../../core/modules/actions"
import {connect} from "react-redux";
import Bar from "./bar";
import {Core} from "Packages/eos/core";

const mapStateToProps = (state) => ({
    percent: state.percent,
    error: state.error
});

const mapDispatchToProps = dispatch => {
    return {
        increment: () => {
            dispatch(incrementRequested())
        },
        decrement: () => {
            dispatch(decrementRequested())
        },
        reset: () => {
            dispatch(resetRequested())
        }
    }
};

const ProgressBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Bar);

export default Core.ComponentLoader.connect(ProgressBarContainer)