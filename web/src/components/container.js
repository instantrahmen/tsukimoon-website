import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <Root className={'root'}>{children}</Root>;
};

export default Container;

const Root = styled.div`
  background: #f6f6f6;
  min-height: 100vh;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  width: 100vw;
  max-width: 100%;
  margin: 0 auto;
`;
