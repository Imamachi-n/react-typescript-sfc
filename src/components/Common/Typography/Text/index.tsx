// 1. Import Layer
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

// 4. Style Layer
export const TypographyText = styled(Typography)`
  color: ${props => props.theme.palette.text.primary};
`;

export default TypographyText;
