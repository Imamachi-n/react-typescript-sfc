// 1. Import Layer
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { StyledScrollTopButton } from 'components/Common/ScrollTop/ScrollTopButton';
import { StyledApiPage } from 'components/ApiPage';
import ScrollRestoration from 'components/Common/ScrollRestoration';
import { ContaineredBottomNavi } from 'components/BottomNavigation';
import { StyledTodoPage } from './components/TodoPage';
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
        {/* Global CSS settings */}
        <GlobalStyle />

        {/* Scroll Restoration */}
        <ScrollRestoration />

        {/* MenuBar */}
        <StyledMenu />
        <div id="back-to-top-anchor" />

        {/* Router */}
        <Switch>
          <Route exact path="/">
            <StyledTopPage />
          </Route>

          <Route path="/todo">
            <StyledTodoPage />
          </Route>

          <Route path="/api">
            <StyledApiPage />
          </Route>
        </Switch>

        {/* ScrollToTop Button */}
        <StyledScrollTopButton />

        {/* BottomNavigation */}
        <ContaineredBottomNavi />
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
