'use client';

import styled from 'styled-components';

export const Overlay = styled.aside`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 38, 38, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;

  display: flex;
  align-items: center;
  justify-content: center;
`;
