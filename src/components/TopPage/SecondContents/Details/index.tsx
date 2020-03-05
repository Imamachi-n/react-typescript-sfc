// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Item from './item';

import { list } from './descText.json';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const Details: React.FC<Props> = props => {
  const { className } = props;

  const cardList = list.map(item => (
    <Grid item sm={12} md={4} key={item.title}>
      <Item title={item.title} desc={item.desc} />
    </Grid>
  ));

  return (
    <div className={className}>
      <Grid container spacing={3}>
        {cardList}
      </Grid>
    </div>
  );
};

// 4. Style Layer
const StyledDetails = styled(Details)``;

export default StyledDetails;
