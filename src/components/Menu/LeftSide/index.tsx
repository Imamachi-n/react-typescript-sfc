// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { StyledTitle } from './Title';
import { StyledScrollButton } from './ScrollButton';
import { StyledToDoButton } from './TodoButton';
import { StyledApiButton } from './ApiButton';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const LeftSide: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <StyledTitle />
      <StyledScrollButton />
      <StyledToDoButton />
      <StyledApiButton />
    </div>
  );
};

// 4. Style Layer
export const StyledLeftSide = styled(LeftSide)`
  display: flex;
`;

export default StyledLeftSide;
