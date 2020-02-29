// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Description from './Description';
import Button from './Button';

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
      <Logo />
      <Description />
      <Button />
    </div>
  );
};

// 4. Style Layer
const StyledTopPage = styled(TopPage)`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default StyledTopPage;
