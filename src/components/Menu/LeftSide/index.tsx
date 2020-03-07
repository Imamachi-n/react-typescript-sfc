// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Hidden } from '@material-ui/core';
import { ContaineredTitle, Title } from './Title';
import { ContaineredScrollButton } from './ScrollButton';
import { ContaineredToDoButton } from './TodoButton';
import { ContaineredApiButton } from './ApiButton';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const LeftSide: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      {/* For mobile */}
      <Hidden mdUp>
        <Title />
      </Hidden>

      {/* For Desktop */}
      <Hidden smDown>
        <ContaineredTitle />
        <ContaineredScrollButton />
        <ContaineredToDoButton />
        <ContaineredApiButton />
      </Hidden>
    </div>
  );
};

// 4. Style Layer
export const StyledLeftSide = styled(LeftSide)`
  display: flex;
`;

export default StyledLeftSide;
