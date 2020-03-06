// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { useHistory } from 'react-router-dom';
import { anchorScroll } from 'services/anchorScroll';

// 2. Types Layer
type ContainerProps = {};

type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// 3. DOM Layer
const ScrollButton: React.FC<Props> = props => {
  const { className, handleClick } = props;

  return (
    <div className={className}>
      <Button color="inherit" onClick={handleClick}>
        <ArrowDownwardIcon className="icon" />
        Scroll
      </Button>
    </div>
  );
};

// 4. Style Layer
const StyledScrollButton = styled(ScrollButton)`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  .icon {
    margin-right: 4px;
  }
`;

// 5. Container Layer
export const ContaineredScrollButton: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    history.push('/');
    anchorScroll(event, '#secondContents', 'start');
  };

  return <StyledScrollButton handleClick={handleClick} />;
};

export default ContaineredScrollButton;
