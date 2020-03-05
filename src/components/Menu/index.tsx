// 1. Import Layer
import React from 'react';
import { Toolbar, Box } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import RightSide from './RightSide';
import StyledAppBar from '../Common/AppBar';
import PrimaryTypography from '../Common/Typography/Text';
import ElevationScroll from '../Common/ElevationScroll';

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
              <PrimaryTypography variant="h6">
                <Box fontWeight="fontWeightBold">React & TypeScript SFC</Box>
              </PrimaryTypography>

              <RightSide />
            </Toolbar>
          </StyledAppBar>
        </ElevationScroll>
      </div>
    </>
  );
};

// 4. Style Layer
const StyledMenu = styled(Menu)`
  background-color: #6772e5;

  .button {
    margin-left: auto;
  }
`;

export default StyledMenu;
