import React from 'react';
import Moviedata from './Moviedata'

let e= React.createElement;

export class MovieList extends React.Component {
  render() {
    return 
        e('div',
        {class: 'container'},
        e(Moviedata),
        );
    
    
  }
}

export default MovieList