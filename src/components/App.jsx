import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButton = button => {
    switch (button) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;

  const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          // options = {['good', 'neutral', 'bad']}
          onLeaveFeedback={handleButton}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
