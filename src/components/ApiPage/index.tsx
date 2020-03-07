// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { StyledPageTitle } from 'components/ApiPage/Title';
import { Container } from '@material-ui/core';
import { Header } from 'components/Common/Header';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const ApiPage: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Header pageName="ApiPage" />

      <Container>
        <StyledPageTitle />
      </Container>
    </div>
  );
};

// 4. Style Layer
export const StyledApiPage = styled(ApiPage)`
  margin-top: 56px;
  min-height: calc(100vh + 56px);
`;

export default StyledApiPage;
