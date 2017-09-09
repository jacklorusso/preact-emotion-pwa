import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
// import Home from 'async!./Home';
// import Profile from 'async!./About';

export default class App extends Component {
  /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} e.url	The newly routed URL
	 */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div>
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <About path="/about/" />
        </Router>
      </div>
    );
  }
}
