import React from 'react';
import Container from './StarContainer';
import Review from './Review';

let e = React.createElement;

export class Moviedata extends React.Component {
  render() {
    return   e('div',

    {class: 'card w-75}'},

    <div>

    <h1>Rotten Tomatoes Movie Rating app</h1>
</div>,

    e('div',
    {class: 'card-header bg-success text-white-'},
    'The BatMan'),


    e('div',
    {class: 'card-body'},
    'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate. '),

    
    e('div',
    {class: 'card-footer'},
    e(Review, {}, null),
    e(Container, {}, null),
    ),

    e('div',
    {class: 'card-header bg-success text-white-'},
    'The Adam Project'),


    e('div',
    {class: 'card-body'},
    'Plot: A time-traveling pilot teams up with his younger self and his late father to come to terms with his past while saving the future.'),

    
    e('div',
    {class: 'card-footer'},
    e(Review, {}, null),
    e(Container, {}, null),
    ),

    e('div',
    {class: 'card-header bg-success text-white-'},
    'Windfall'),


    e('div',
    {class: 'card-body'},
    'Plot: A man breaks into a tech billionaire\'s empty vacation home, but things go sideways when the arrogant mogul and his wife arrive for a last-minute getaway.'),

    

    
    e('div',
    {class: 'card-footer'},
    e(Review, {}, null),
    e(Container, {}, null),
    )




    );

   
    
  }
}

export default Moviedata