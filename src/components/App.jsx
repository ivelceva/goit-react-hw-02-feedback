import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Feedback } from './feedback/Feedback';
import { Statistics } from './feedback/Statistics';
import { Section } from './feedback/Section';
import { Notification } from './feedback/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            leaveFeedback={this.onBtnClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyle />
      </>
    );
  }
}


// export const App = () => {
//   return (
//     <div>  
//       <Feedback />
//       <GlobalStyle />
//     </div>
//   );
// };