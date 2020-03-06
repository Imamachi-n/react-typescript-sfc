// 1. Import Layer
import React from 'react';
import styled from 'styled-components';

// 2. Type Layer
type ContainerProps = {
  children: React.ReactElement;
  anchorId: string;
};

type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
} & ContainerProps;

// 3. DOM Layer
const AnchorScroll: React.FC<Props> = props => {
  const { className, children, handleClick } = props;

  return (
    <div className={className} onClick={handleClick} role="presentation">
      {children}
    </div>
  );
};

// 4. Style Layer
const StyledAnchorScroll = styled(AnchorScroll)``;

// 5. Container Layer
export const ContaineredAnchorScroll: React.FC<ContainerProps> = props => {
  const { anchorId } = props;

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // TODO: アンカーに`id="${props.anchorId}"`を設定する必要あり。
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(anchorId);

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return <StyledAnchorScroll {...props} handleClick={handleClick} />;
};
