// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { TypographyText } from 'components/Common/Typography/Text';
import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { anchorScroll } from 'services/anchorScroll';

// 2. Types Layer
type ContainerProps = {};

type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
} & ContainerProps;

// 3. DOM Layer
export const Title: React.FC<Props> = props => {
  const { className, handleClick } = props;

  return (
    <div className={className}>
      <Button color="inherit" onClick={handleClick}>
        <TypographyText variant="h6">
          <Box fontWeight="fontWeightBold">React & TypeScript SFC</Box>
        </TypographyText>
      </Button>
    </div>
  );
};

// 4. Style Layer
const StyledTitle = styled(Title)`
  display: flex;
  align-items: center;
`;

// 5. Container Layer
export const ContaineredTitle: React.FC<ContainerProps> = () => {
  const history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    history.push('/');
    anchorScroll(event, '#firstContents', 'center');
  };

  return <StyledTitle handleClick={handleClick} />;
};

export default StyledTitle;
