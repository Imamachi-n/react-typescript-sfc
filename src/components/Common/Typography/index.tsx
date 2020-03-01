// 1. Import Layer
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

// 4. Style Layer
const StyledTypography = styled(Typography)`
  color: ${props => props.theme.palette.text.primary};
`;

export default StyledTypography;
