// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { TypographyText } from 'components/Common/Typography/Text';
import { Box } from '@material-ui/core';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const Title: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <TypographyText variant="h6">
        <Box fontWeight="fontWeightBold">React & TypeScript SFC</Box>
      </TypographyText>
    </div>
  );
};

// 4. Style Layer
export const StyledTitle = styled(Title)`
  display: flex;
  align-items: center;
`;

export default StyledTitle;
