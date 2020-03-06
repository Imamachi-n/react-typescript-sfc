// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { ContaineredScrollTop } from 'components/Common/ScrollTop';
import { Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const ScrollTopButton: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <ContaineredScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ContaineredScrollTop>
    </div>
  );
};

// 4. Style Layer
export const StyledScrollTopButton = styled(ScrollTopButton)``;

export default StyledScrollTopButton;
