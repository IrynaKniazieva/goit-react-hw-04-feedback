import React from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  handleButton = button => {
    let key = button.target.textContent.toLowerCase();
    this.setState( state=>({ [key]: state[key] + 1 }));
  };


  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  }
  
  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const totalFeedback = this.countTotalFeedback(this.state)
    return Math.round(good/totalFeedback * 100)
  }

  render () {
      const { good, neutral, bad } = this.state;
      const totalFeedback = this.countTotalFeedback(this.state);
      const positivePercentage = this.countPositiveFeedbackPercentage(this.state);

      return <div>
      <Section
      title = "Please leave feedback">
      
      <FeedbackOptions 
      options = {['good', 'neutral', 'bad']}
      onLeaveFeedback = {this.handleButton} />
      </Section>

      <Section
      title = "Statistics">
        {totalFeedback ? (
          <Statistics
          good = {good}
          neutral = {neutral}
          bad = {bad}
          total = {totalFeedback}
          positivePercentage = {positivePercentage}/>
        ) : (
        <Notification 
          message="There is no feedback"/>)}
      </Section>
  
      
  </div>
  }
}


export default App;

