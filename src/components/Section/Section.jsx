import PropTypes from 'prop-types';

export const Section = ({ title }) => {
  return <>{title && <Section>{title}</Section>}</>;
};

Section.propTypes = {
  title: PropTypes.string,
};
