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
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  leaveFeedback: PropTypes.func.isRequired,
};





