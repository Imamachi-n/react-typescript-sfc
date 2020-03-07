// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import {
  Hidden,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HomeIcon from '@material-ui/icons/Home';
import { anchorScroll } from 'services/anchorScroll';
import { useHistory } from 'react-router-dom';

// 2. Types Layer
type ContainerProps = {};

type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
  handleClick4Home: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleClick4Scroll: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleClick4Todo: () => void;
  handleClick4Api: () => void;
} & ContainerProps;

// 3. DOM Layer
const BottomNavi: React.FC<Props> = props => {
  const {
    className,
    handleClick4Home,
    handleClick4Scroll,
    handleClick4Todo,
    handleClick4Api,
  } = props;

  const [value, setValue] = React.useState(0);

  return (
    <div className={className}>
      <Hidden mdUp>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={handleClick4Home}
          />
          <BottomNavigationAction
            label="Scroll"
            icon={<ArrowDownwardIcon />}
            onClick={handleClick4Scroll}
          />
          <BottomNavigationAction
            label="ToDo"
            icon={<FormatListBulletedIcon />}
            onClick={handleClick4Todo}
          />
          <BottomNavigationAction
            label="API"
            icon={<LanguageIcon />}
            onClick={handleClick4Api}
          />
        </BottomNavigation>
      </Hidden>
    </div>
  );
};

// 4. Style Layer
export const StyledBottomNavi = styled(BottomNavi)`
  width: 100%;
  position: fixed;
  bottom: 0;
`;

// 5. Container Layer
export const ContaineredBottomNavi: React.FC<ContainerProps> = () => {
  const history = useHistory();

  const handleClick4Home = (event: React.MouseEvent<HTMLDivElement>) => {
    history.push('/');
    anchorScroll(event, '#firstContents', 'center');
  };

  const handleClick4Scroll = (event: React.MouseEvent<HTMLDivElement>) => {
    history.push('/');
    anchorScroll(event, '#secondContents', 'start');
  };

  const handleClick4Todo = () => {
    history.push('/todo');
  };

  const handleClick4Api = () => {
    history.push('/api');
  };

  return (
    <StyledBottomNavi
      handleClick4Home={handleClick4Home}
      handleClick4Scroll={handleClick4Scroll}
      handleClick4Todo={handleClick4Todo}
      handleClick4Api={handleClick4Api}
    />
  );
};

export default ContaineredBottomNavi;
