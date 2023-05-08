import React from 'react';
import PropTypes from 'prop-types';
import { Container, BtnContainer, Button } from './Feedback.styled';

export const Feedback = ({ options, leaveFeedback }) => {
  return (
    <Container>
      {options.map(option => (
        <BtnContainer>
          <Button key={option} onClick={() => leaveFeedback(option)}>
            {option}
          </Button>
        </BtnContainer>
      ))}
    </Container>
  );
};

Feedback.propTypes = {
  options: PropTypes.array.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};


// export const Feedback = () => {
//     const [state, setState] = useState({
//       good: 0,
//       neutral: 0,
//       bad: 0,
//     });

//   const update = type => {
//     setState(prevState => ({
//         ...prevState,
//         [type]: prevState[type] + 1,
//     }));
// }

//     return (
//       <Container>
//         <Title>Please, leave feedback</Title>
//         <BtnContainer>
//           <Button onClick={() => update('good')}>Good</Button>
//           <Button onClick={() => update('neutral')}>Neutral</Button>
//           <Button onClick={() => update('bad')}>Bad</Button>
//         </BtnContainer>

//         <TitleStatistics>Statistics</TitleStatistics>
//         <ul>
//           <li>Good: {state.good}</li>
//           <li>Neutral: {state.neutral}</li>
//           <li>Bad: {state.bad}</li>
//         </ul>
//       </Container>
//     );
// }




