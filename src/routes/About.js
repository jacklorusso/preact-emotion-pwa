import { h, Component } from 'preact';
import { css } from 'preact-emotion';

const about = css`
  height: 100vh;
  width: 100vw;
  background: #3ec2f1;
`;

export default class About extends Component {
  render() {
    return (
      <div className={about}>
        <h1>About</h1>
      </div>
    );
  }
}
