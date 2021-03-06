// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

// 2. Types Layer
type ContainerProps = {
  status?: boolean;
};

type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
} & ContainerProps;

// 3. DOM Layer
const Logo: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div>
      <img className={className} src={logo} alt="logo" />
    </div>
  );
};

// 4. Style Layer
export const StyledLogo = styled(Logo)`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default StyledLogo;
