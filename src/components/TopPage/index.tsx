// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { StyledFirstContents } from './FirstContents';
import { StyledSecondContents } from './SecondContents';

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
      <div id="firstContents" />
      <StyledFirstContents />

      <div id="secondContents" />
      <StyledSecondContents />
    </div>
  );
};

// 4. Style Layer
export const StyledTopPage = styled(TopPage)``;

export default StyledTopPage;
