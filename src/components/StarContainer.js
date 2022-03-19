import React, { Component } from 'react'
import Counter from './Counter'

export default class Container extends React.Component {
   constructor(props) {
     super(props)
   
     this.state = {
        counts: {}
     };
     this.countClicks = this.countClicks.bind(this)
   }

   countClicks(name) {
       this.setState(state=> {
           state.counts[name]
           ? state.counts[name] += 1
           : state.counts[name] = 1;
           return state;
       });
       }
   
       
  render() {
    return (
        <div>
      <Counter 
      name="Stars"
      count={this.state.counts.Stars}
      onClick={this.countClicks}

      />



      </div>
    );
  }
}

