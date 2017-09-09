import { h, Component } from 'preact';
import { css } from 'preact-emotion';

const home = css`
  height: 100vh;
  width: 100vw;
  background: #ab80ff;
`;

export default class Home extends Component {
  render() {
    return (
      <div className={home}>
        <h1>Home</h1>
      </div>
    );
  }
}
