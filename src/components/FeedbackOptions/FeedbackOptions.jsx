// import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import { Section } from 'components/Section/Section';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      {options.map(option => (
        <Button key={option} leaveFeedback={() => onLeaveFeedback({ option })}>
          {option}
        </Button>
      ))}
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
