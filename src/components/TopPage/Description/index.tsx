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
const Description: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
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
const StyledDescription = styled(Description)`
  .App-link {
    color: #61dafb;
  }
`;

export default StyledDescription;
