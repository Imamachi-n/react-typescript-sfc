// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import StyledLogo from './components/Logo';
import GlobalStyle from './styles/baseStyle';

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
const App: React.FC<Props> = props => {
  const { className, handleClick, status } = props;

  return (
    <div>
      <GlobalStyle />
      <header className={className}>
        <StyledLogo />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button type="button" onClick={handleClick}>
          {status ? 'click me' : 'CLICK ME'}
        </button>
      </header>
    </div>
  );
};

// 4. Style Layer
const StyledApp = styled(App)`
  text-align: center;

  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .App-link {
    color: #61dafb;
  }
`;

// 5. Container Layer
const AppContainer: React.FC<ContainerProps> = props => {
  // State Management
  const [status, setStatus] = React.useState(false);
  const handleClick = React.useCallback(() => {
    setStatus(!status);
  }, [status]);

  return <StyledApp {...props} status={status} handleClick={handleClick} />;
};

export default AppContainer;
