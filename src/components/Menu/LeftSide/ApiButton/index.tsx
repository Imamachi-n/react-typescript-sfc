// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const ApiButton: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Button color="inherit">
        <LanguageIcon />
        API CALL
      </Button>
    </div>
  );
};

// 4. Style Layer
export const StyledApiButton = styled(ApiButton)`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`;

export default StyledApiButton;
