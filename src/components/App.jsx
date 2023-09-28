import { useState } from 'react';
import { ModernNormalize } from 'emotion-modern-normalize';
import { GlobalStyle } from 'GlobalStyle';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const onLeaveFeedback = e => {
	switch (e.target.value) { 
	  case "good":
		setGood(prevCount => prevCount + 1);
		break;
	  case "neutral":
		setNeutral(prevCount => prevCount + 1);
		break;
	  case "bad":
		setBad(prevCount => prevCount + 1);
		break;
	  default:
	    return;
	}
  };

  const countTotalFeedback = () => {
    const total = [good, neutral, bad].reduce((acc, val) => acc + val, 0);
    return total;
  }
  
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const pos = Math.round((good / countTotalFeedback()) * 100);
    return (pos) ? pos : 0;
  }

	return (
	  <>
		<Section title="Please leave feedback">
		  <FeedbackOptions 
			options={["good", "neutral", "bad"]} 
			onLeaveFeedback={onLeaveFeedback} 
		  />
		</Section>

		{total ? 
		  <Section title="Statistics">
			<Statistics 
			  good={good} 
			  neutral={neutral} 
			  bad={bad} 
			  total={countTotalFeedback()} 
			  positivePercentage={countPositiveFeedbackPercentage()}>
			</Statistics>
		  </Section>
		:
		  <Notification message="There is no feedback"></Notification>
		}

		<ModernNormalize />
		<GlobalStyle />
	  </>
	);
}