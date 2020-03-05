// 1. Import Layer
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { StyledTopPage } from './components/TopPage';
import { StyledMenu } from './components/Menu';
import GlobalStyle from './styles/BaseStyle';

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
    <Router>
      <div className={className}>
        <GlobalStyle />

        <StyledMenu />

        <Switch>
          <Route exact path="/">
            <StyledTopPage />
          </Route>

          <Route exact path="/todo">
            <div>
              <p>TODO</p>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// 4. Style Layer
const StyledApp = styled(App)`
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default StyledApp;
