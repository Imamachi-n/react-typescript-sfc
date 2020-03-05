// 1. Import Layer
import { AppBar } from '@material-ui/core';
import styled from 'styled-components';

// 4. Style Layer
export const StyledAppBar = styled(AppBar)`
  background-color: ${props => props.theme.palette.primary.main};
`;

export default StyledAppBar;
