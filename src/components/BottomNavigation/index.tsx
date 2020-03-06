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
import { ContaineredAnchorScroll } from 'components/Common/AnchorScroll';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const BottomNavi: React.FC<Props> = props => {
  const { className } = props;
  const [value, setValue] = React.useState(0);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // TODO: アンカーに`id="${props.anchorId}"`を設定する必要あり。
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#secondContents');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            label="Scroll"
            icon={<ArrowDownwardIcon />}
            onClick={handleClick}
          />
          <BottomNavigationAction
            label="ToDo"
            icon={<FormatListBulletedIcon />}
          />
          <BottomNavigationAction label="API" icon={<LanguageIcon />} />
        </BottomNavigation>
      </Hidden>
    </div>
  );
};

// 4. Style Layer
export const StyledBottomNavigation = styled(BottomNavi)`
  width: 100%;
  position: fixed;
  bottom: 0;
`;

export default StyledBottomNavigation;
