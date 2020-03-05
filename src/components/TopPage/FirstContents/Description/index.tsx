// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { TypographyPrimary } from 'components/Common/Typography/Primary';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const Description: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <TypographyPrimary variant="h2">
        <Box fontWeight="fontWeightBold">React</Box>
      </TypographyPrimary>
      <p>A JavaScript library for building user interfaces.</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

// 4. Style Layer
export const StyledDescription = styled(Description)`
  .App-link {
    color: ${props => props.theme.palette.primary.main};
  }
`;

export default StyledDescription;
