import Notification from "../Notification/Notification";

import styles from "../Feedback/Feedback.module.css";

function Statistics({ good, neutral, bad, total, percentage, }) {
    return (
        <div>
            {good || neutral || bad !== 0 ?(
                <ul>
                    <li>
                        <span className={styles.good}>Good</span> :{good}
                    </li>
                    <li>
                        <span className={styles.neutral}>Neutral</span> :{neutral}
                    </li>
                    <li>
                        <span className={styles.bad}>Bad</span> :{bad}
                    </li>
                    <li className={styles.total}>Total reviews: {total}</li>
                    <li className={styles.positivePercentage}>Good reviews: {percentage}%{" "}</li>
                </ul>
            ) : (< Notification message="No reviews!" />)}
        </div>
    );
}

export default Statistics;