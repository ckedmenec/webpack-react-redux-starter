import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import DevTools from './DevTools';

export default class AlarmCardRoot extends Component {
  get devTools() {
    if (process.env.NODE_ENV !== 'production') {
      return <DevTools />
    }
  }

  render() {
    const { store, ...props } = this.props;
    return (
      <Provider store={store}>
        <div>
          <App {...props}/>
          {this.devTools}
        </div>
      </Provider>
    );
  }
}