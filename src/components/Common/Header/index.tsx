// 1. Import Layer
import React from 'react';
import { Helmet } from 'react-helmet';

// 2. Types Layer
type Props = {
  pageName: string;
};

// 3. DOM Layer
export const Header: React.FC<Props> = props => {
  const { pageName } = props;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React & TypeScript SFC - {pageName}</title>
        <link
          rel="GitHub"
          href="https://github.com/Imamachi-n/react-typescript-sfc"
        />
      </Helmet>
    </>
  );
};
