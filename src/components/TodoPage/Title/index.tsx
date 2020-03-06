// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { TypographyPrimary } from 'components/Common/Typography/Primary';
import { Box } from '@material-ui/core';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const PageTitle: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <FormatListBulletedIcon className="icon" fontSize="large" />
      <TypographyPrimary variant="h4">
        <Box fontWeight="fontWeightBold">TODO List</Box>
      </TypographyPrimary>
    </div>
  );
};

// 4. Style Layer
export const StyledPageTitle = styled(PageTitle)`
  display: flex;
  align-items: center;
  padding-top: 15px;

  .icon {
    color: ${props => props.theme.palette.primary.main};
    margin-right: 4px;
  }
`;

export default StyledPageTitle;
