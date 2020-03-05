import React from 'react';
import { useScrollTrigger } from '@material-ui/core';

interface ScrollProps {
  children: React.ReactElement;
}

// Component for Elevate App Bar
// Use this component inside <React.fragment>
// https://material-ui.com/components/app-bar/#elevate-app-bar
export function ElevationScroll(props: ScrollProps) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default ElevationScroll;
