import Section from "../Section/Section";
import Controls from "../Controls/Controls";
import Statistics from "../Statistics/Statistics";
import React from "react";

import styles from "../Feedback/Feedback.module.css";

class Feedback extends React.Component {
    static defaultProps = { initialValue: 0, };

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleClick = (e) => {
        const { name } = e.currentTarget;
        this.setState((prevState) => {
            return {
                [name]: prevState[name] + 1,
            };
        });
    };

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };

    countGoodReviewPercent = () => {
        return Math.round((this.state.good * 100) / this.countTotalFeedback());
    };

    render() {
        return (
            <div className={styles.container}>
                <Section title="Please, leave yours review">
                    <Controls options={this.state} onLeaveFeedback={this.handleClick} />
                </Section>
                <Section title="Statistics">
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        percentage={this.countGoodReviewPercent()}
                    />
                </Section>
            </div>
        );
    }
}

export default Feedback;