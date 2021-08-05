import { useState } from "react";
import Section from "../Section/Section";
import Controls from "../Controls/Controls";
import Statistics from "../Statistics/Statistics";
import React from "react";

import styles from "../Feedback/Feedback.module.css";

function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const state = { good, neutral, bad };

    const handleClick = e => {
        const { name } = e.target;

        switch (name) {
            case "good":
                setGood((state) => state + 1);
                break;
            case "neutral":
                setNeutral((state) => state + 1);
                break;
            case "bad":
                setBad((state) => state + 1);
                break;
            default:
                return;
        }
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countGoodReviewPercent = () => {
        return Math.round((good * 100) / countTotalFeedback());
    };

    return (
        <div className={styles.container}>
            <Section title="Please, leave yours review">
                <Controls options={state} onLeaveFeedback={handleClick} />
            </Section>
            <Section title="Statistics">
                <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    percentage={countGoodReviewPercent()}
                />
            </Section>
        </div>
    )
}

export default Feedback;