import { decrementRequested, incrementRequested, resetRequested } from "../../../../core/modules/actions"
import { connect } from "react-redux";
import Bar from "./bar";
import  Core  from "core";

const mapStateToProps = (state) => ({
    percent: state.progressBar && state.progressBar.percent,
    error: state.progressBar && state.progressBar.error
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

export default Core.connect(ProgressBarContainer)