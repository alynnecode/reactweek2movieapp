import React, { Component } from 'react'
import Counter from './Counter'

export default class Container extends React.Component {
  render() {
    return (
        <div>
      <Counter name="One" />
      <Counter name="Two" />
      <Counter name="Three" />
      </div>
    );
  }
}

