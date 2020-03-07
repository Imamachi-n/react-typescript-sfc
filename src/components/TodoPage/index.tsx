// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { StyledPageTitle } from 'components/TodoPage/Title';
import { Container } from '@material-ui/core';
import { Header } from 'components/Common/Header';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const TodoPage: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Header pageName="TodoPage" />

      <Container>
        <StyledPageTitle />
      </Container>
    </div>
  );
};

// 4. Style Layer
export const StyledTodoPage = styled(TodoPage)`
  margin-top: 56px;
  min-height: calc(100vh + 56px);
`;

export default StyledTodoPage;
