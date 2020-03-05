// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const ScrollButton: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Button color="inherit">
        <ArrowDownwardIcon />
        Scroll
      </Button>
    </div>
  );
};

// 4. Style Layer
export const StyledScrollButton = styled(ScrollButton)`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export default StyledScrollButton;
