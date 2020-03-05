// 1. Import Layer
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

// 4. Style Layer
export const TypographyPrimary = styled(Typography)`
  color: ${props => props.theme.palette.primary.main};
`;

export default TypographyPrimary;
