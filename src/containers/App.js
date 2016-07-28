import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as AppActions } from '../actions/AppActions';

import '../styles/index.scss';

class App extends Component {
  render() {
    return (
      <div />
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, AppActions)(App);