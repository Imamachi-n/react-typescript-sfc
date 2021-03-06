// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const TodoForm: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <TextField id="outlined-basic" label="Task" variant="outlined" />
    </div>
  );
};

// 4. Style Layer
export const StyledTodoForm = styled(TodoForm)``;

export default StyledTodoForm;
