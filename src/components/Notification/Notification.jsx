import PropTypes from 'prop-types';
import { Prompt } from './Notification.styled';

const Notification = ({ message }) => {
  return <Prompt>{message}</Prompt>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;
