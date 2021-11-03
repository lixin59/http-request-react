import React from 'react';
import ReactDOM from 'react-dom';
import Students from './components/Students';

class App extends React.Component<any, any> {
  render() {
    return (
      <Students/>
    );
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app'),
);
