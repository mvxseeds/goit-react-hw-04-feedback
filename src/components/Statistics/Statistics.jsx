import PropTypes from 'prop-types';
import { Prompt } from "components/Notification/Notification.styled";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <>
            <Prompt>Good: {good}</Prompt>
            <Prompt>Neutral: {neutral}</Prompt>
            <Prompt>Bad: {bad}</Prompt>
            <Prompt>Total: {total}</Prompt>
            <Prompt>PositiveFeedback: {positivePercentage}%</Prompt>
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
