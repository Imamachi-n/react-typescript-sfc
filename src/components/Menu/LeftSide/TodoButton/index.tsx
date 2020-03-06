// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const ToDoButton: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Button color="inherit">
        <FormatListBulletedIcon className="icon" />
        TODO
      </Button>
    </div>
  );
};

// 4. Style Layer
export const StyledToDoButton = styled(ToDoButton)`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;

  .icon {
    margin-right: 4px;
  }
`;

export default StyledToDoButton;
