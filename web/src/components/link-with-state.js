import { Link } from 'gatsby';
import React from 'react';
import { useLocation } from '@reach/router';

const LinkWithState = ({ state = {}, ...props }) => {
  const location = useLocation();

  return (
    <>
      <Link state={{ ...state, prevPath: location.pathname }} {...props}></Link>
    </>
  );
};

export default LinkWithState;
