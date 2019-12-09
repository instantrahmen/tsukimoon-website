import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <Root className={'root'}>{children}</Root>;
};

export default Container;

const Root = styled.div`
  background: #fafafa;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  max-width: 1200px;
  width: 100vw;
  margin: 0 auto;
`;
