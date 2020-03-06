// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { useHistory } from 'react-router-dom';

// 2. Types Layer
type ContainerProps = {};

type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
  handleClick: () => void;
};

// 3. DOM Layer
const ApiButton: React.FC<Props> = props => {
  const { className, handleClick } = props;

  return (
    <div className={className}>
      <Button color="inherit" onClick={handleClick}>
        <LanguageIcon className="icon" />
        API CALL
      </Button>
    </div>
  );
};

// 4. Style Layer
const StyledApiButton = styled(ApiButton)`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;

  .icon {
    margin-right: 4px;
  }
`;

// 5. Container Layer
export const ContaineredApiButton: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const handleClick = () => history.push('/api');

  return <StyledApiButton handleClick={handleClick} />;
};

export default ContaineredApiButton;
