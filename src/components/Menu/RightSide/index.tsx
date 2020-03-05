// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { StyledGitHubLink } from './GitHubLink';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const RightSide: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <StyledGitHubLink />
    </div>
  );
};

// 4. Style Layer
const StyledRightSide = styled(RightSide)`
  margin-left: auto;
`;

export default StyledRightSide;
