// 1. Import Layer
import React from "react";
import StyledLogo from "./Logo";
import styled from "styled-components";

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const App: React.FC<Props> = props => {
  return (
    <div>
      <header className={props.className}>
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

export default StyledApp;
