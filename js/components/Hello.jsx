import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <div>
        hello {this.state.name}
        <br />
        <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
      </div>
    );
  }
}

// const Hello = ({ name }) => {
//   return (
//       <div>hello {name}</div>
//     );
// };
