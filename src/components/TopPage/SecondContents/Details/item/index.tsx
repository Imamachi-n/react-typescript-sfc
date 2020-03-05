// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Typography, Box } from '@material-ui/core';
import { TypographyPrimary } from 'components/Common/Typography/Primary';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
  title: string;
  desc: string[];
};

// 3. DOM Layer
const Item: React.FC<Props> = props => {
  const { className, title, desc } = props;

  const descList = desc.map(line => <Typography key={line}>{line}</Typography>);

  return (
    <div className={className}>
      <TypographyPrimary variant="h5">
        <Box fontWeight="fontWeightBold" m={1}>
          {title}
        </Box>
      </TypographyPrimary>

      {descList}
    </div>
  );
};

// 4. Style Layer
export const StyledItem = styled(Item)`
  margin-right: 1rem;
  margin-left: 1rem;
`;

export default StyledItem;
