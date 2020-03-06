// 1. Import Layer
import React from 'react';
import styled from 'styled-components';

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
      <p>API</p>
    </div>
  );
};

// 4. Style Layer
export const StyledApiPage = styled(ApiPage)`
  margin-top: 64px;
  min-height: 100vh;
`;

export default StyledApiPage;
