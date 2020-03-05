// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import Details from './Details';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const TopPage: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Container>
        <Details />
      </Container>
    </div>
  );
};

// 4. Style Layer
const StyledTopPage = styled(TopPage)`
  min-height: 90vh;
`;

export default StyledTopPage;
