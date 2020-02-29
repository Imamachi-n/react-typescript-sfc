// 1. Import Layer
import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
// } from 'react-router-dom';
import styled from 'styled-components';
import TopPage from './components/TopPage';
import GlobalStyle from './styles/baseStyle';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const App: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <GlobalStyle />
      <TopPage />
    </div>
  );
};

// 4. Style Layer
const StyledApp = styled(App)`
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default StyledApp;
