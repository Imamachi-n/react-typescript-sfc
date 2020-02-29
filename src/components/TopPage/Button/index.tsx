// 1. Import Layer
import React from 'react';
import styled from 'styled-components';

// 2. Types Layer
type ContainerProps = {
  status?: boolean;
  handleClick?: () => void;
};

type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
} & ContainerProps;

// 3. DOM Layer
const Button: React.FC<Props> = props => {
  const { className, handleClick, status } = props;

  return (
    <div className={className}>
      <button type="button" onClick={handleClick}>
        {status ? 'click me' : 'CLICK ME'}
      </button>
    </div>
  );
};

// 4. Style Layer
const StyledButton = styled(Button)`
  box-sizing: inherit;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: ease;

  button {
    color: #282c34;
    background-color: #61dafb;
    cursor: pointer;
    font-size: calc(10px + 1vmin);
    font-weight: 500;
    line-height: 45px;
    margin: 2em 0;
    padding: 0 1em;
    min-width: 120px;
    max-width: 120px;
    position: relative;
    text-decoration: none;
    width: 100%;

    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0.5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  button:active {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
  }
`;

// 5. Container Layer
const ButtonContainer: React.FC<ContainerProps> = props => {
  // State Management
  const [status, setStatus] = React.useState(false);
  const handleClick = React.useCallback(() => {
    setStatus(!status);
  }, [status]);

  return <StyledButton {...props} status={status} handleClick={handleClick} />;
};

export default ButtonContainer;
