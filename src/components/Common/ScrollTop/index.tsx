// 1. Import Layer
import React from 'react';
import styled from 'styled-components';
import { useScrollTrigger, Zoom } from '@material-ui/core';
import { anchorScroll } from 'services/anchorScroll';

// 2. Type Layer
type ContainerProps = {
  children: React.ReactElement;
};

type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
  trigger: boolean;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
} & ContainerProps;

// 3. DOM Layer
const ScrollTop: React.FC<Props> = props => {
  const { className, children, trigger, handleClick } = props;

  return (
    <>
      <Zoom in={trigger}>
        <div className={className} onClick={handleClick} role="presentation">
          {children}
        </div>
      </Zoom>
    </>
  );
};

// 4. Style Layer
export const StyledScrollTop = styled(ScrollTop)`
  position: fixed;
  bottom: ${props => props.theme.spacing(2)}px;
  right: ${props => props.theme.spacing(2)}px;
`;

// 5. Container Layer
export const ContaineredScrollTop: React.FC<ContainerProps> = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    anchorScroll(event, '#back-to-top-anchor', 'center');
  };

  return (
    <StyledScrollTop {...props} trigger={trigger} handleClick={handleClick} />
  );
};

export default ContaineredScrollTop;
