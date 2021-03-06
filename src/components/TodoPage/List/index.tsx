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
const TodoList: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <p>TODO</p>
    </div>
  );
};

// 4. Style Layer
export const StyledTodoList = styled(TodoList)``;

export default StyledTodoList;
