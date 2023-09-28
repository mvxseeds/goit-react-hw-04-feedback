import PropTypes from 'prop-types';
import { OptionsList, Option, FeedbackButton } from "./FeedbackOptions.styled";

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <OptionsList>{
            options.map(option => {
                return (
                    <Option key={option}>
                        <FeedbackButton type="button" value={option} onClick={onLeaveFeedback}>{option}</FeedbackButton>
                    </Option>
                );
            })
        }</OptionsList>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
