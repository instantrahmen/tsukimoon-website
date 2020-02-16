import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <Root className={'root'}>{children}</Root>;
};

export default Container;

const Root = styled.div`
  /* background: #f6f6f6; */
  /* background-color: #68bd5e;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232ea12e' fill-opacity='0.32' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E"); */
  background: none;
  min-height: 100vh;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;
`;
