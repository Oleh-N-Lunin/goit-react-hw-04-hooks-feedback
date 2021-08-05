import PropTypes from "prop-types";

import styles from "../Feedback/Feedback.module.css";

function Controls({ options, onLeaveFeedback }){
    const buttonMap = Object.keys(options);

    return (
        <div>
            {buttonMap.map((item, index) => (
                <button
                    key={Math.random(3)}
                    name={item}
                    type="button"
                    onClick={onLeaveFeedback}
                    className={styles.btn}
                >
                    {["Good", "Neutral", "Bad"][index]}
                </button>
            ))}
        </div>
    );
}

Controls.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default Controls;