import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    const { initialName } = props;
    this.state = {
      name: initialName,
    };
  }
  render() {
    const { name } = this.state;
    const { children } = this.props;
    return (
      <div>
        hello {name}
        <br />
        <input
          type="text"
          value={name}
          onChange={this.handleChange.bind(this)} />
        {children}
      </div>
    );
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
}

Hello.propTypes = {
  initialName: PropTypes.string.isRequired,
};

export default Hello;

// const Hello = ({ name }) => {
//   return (
//       <div>hello {name}</div>
//     );
// };
