// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { StyledLogo } from './Logo';
import { StyledDescription } from './Description';
import { ContaineredButton } from './Button';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const FirstContents: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <StyledLogo />
      <StyledDescription />
      <ContaineredButton />
    </div>
  );
};

// 4. Style Layer
export const StyledFirstContents = styled(FirstContents)`
  margin-top: 56px;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default StyledFirstContents;
