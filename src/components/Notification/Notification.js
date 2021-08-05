import PropTypes from "prop-types";

function Notification({ message }) {
    return <div>{<h2>{message}</h2>}</div>;
}

Notification.propTypes = {
    message: PropTypes.string,
};

export default Notification;