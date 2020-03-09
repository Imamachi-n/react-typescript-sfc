import React from 'react';
import { action } from '@storybook/addon-actions';
import { StyledBottomNavi } from 'components/BottomNavigation';

export default {
  title: 'BottomNavi',
  component: StyledBottomNavi,
};

export const BottomNavi = () => (
  <StyledBottomNavi
    handleClick4Home={action('Home')}
    handleClick4Scroll={action('Scroll')}
    handleClick4Todo={action('Todo')}
    handleClick4Api={action('Api')}
  />
);
