import React from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import Colors from './Colors';

const spin = keyframes`
  to{
    transform: rotate(360deg);
  }
`;

const NavBar = () => (
  <header
    css={css`
      background-color: ${Colors.secondary};
      padding: 15px;
      margin-bottom: 20px;
      margin-top: 20px;
      border-radius: 10px;
    `}
  >
    <Link to="/">Adopt Me!</Link>
    <span
      css={css`
        font-size: 60px;
        display: inline-block;

        &:hover {
          animation: 1s ${spin} linear infinite;
          cursor: pointer;
        }
      `}
      role="img"
      aria-label="logo"
    >
      🐶
    </span>
  </header>
);

export default NavBar;
