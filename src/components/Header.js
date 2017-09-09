import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import styled, { css } from 'preact-emotion';

// Example of emotion's styled API
const NavBar = styled('header')`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  background: #fff;

  & h1 {
    float: left;
    padding-left: 18px;
    font-size: 18px;
    font-weight: 600;
  }
`;

// Example of emotion's css API
const links = css`
  display: inline-block;
  float: right;
  font-size: 18px;

  & a {
    color: inherit;
    text-decoration: none;
    padding-right: 18px;

    &:hover {
      color: #00cc76;
    }
  }
`;

export default class Header extends Component {
  render() {
    return (
      <NavBar>
        <h1>preact-emotion-pwa</h1>
        <nav className={links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <a href="https://github.com/lol-russo" target="_blank">
            GitHub
          </a>
        </nav>
      </NavBar>
    );
  }
}
