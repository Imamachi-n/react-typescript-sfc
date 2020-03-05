// 1. Import Layer
import React from 'react';
import { Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { StyledAppBar } from 'components/Common/AppBar';
import { ElevationScroll } from 'components/Common/ElevationScroll';
import { StyledRightSide } from './RightSide';
import { StyledLeftSide } from './LeftSide';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const Menu: React.FC<Props> = props => {
  const { className } = props;

  return (
    <>
      <div className={className}>
        <ElevationScroll {...props}>
          <StyledAppBar>
            <Toolbar>
              <StyledLeftSide />
              <StyledRightSide />
            </Toolbar>
          </StyledAppBar>
        </ElevationScroll>
      </div>
    </>
  );
};

// 4. Style Layer
export const StyledMenu = styled(Menu)`
  background-color: #6772e5;
`;

export default StyledMenu;
