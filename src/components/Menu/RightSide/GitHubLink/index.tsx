// 1. Import Layer
import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';

// 2. Types Layer
type Props = {
  // When defining a component you will need to mark className as optional in your Props
  // https://styled-components.com/docs/api#caveat-with-classname
  className?: string;
};

// 3. DOM Layer
const GitHubLink: React.FC<Props> = props => {
  const { className } = props;

  return (
    <div className={className}>
      <Tooltip title="GitHub Repo">
        <a
          className="link"
          href="https://github.com/Imamachi-n/react-typescript-sfc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton
            aria-label="GitHub Repo"
            aria-haspopup="true"
            color="inherit"
          >
            <GitHubIcon className="icon" />
          </IconButton>
        </a>
      </Tooltip>
    </div>
  );
};

// 4. Style Layer
export const StyledGitHubLink = styled(GitHubLink)`
  .link {
    color: ${props => props.theme.palette.text.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default StyledGitHubLink;
