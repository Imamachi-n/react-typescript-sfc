// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { StyledDetails } from './Details';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const SecondContents: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Container>
        <StyledDetails />
      </Container>
    </div>
  );
};

// 4. Style Layer
export const StyledSecondContents = styled(SecondContents)`
  min-height: 90vh;
`;

export default StyledSecondContents;
