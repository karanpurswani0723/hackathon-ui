import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  handleIncrement(product) {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement(product) {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm m-2"
        >
          increment
        </button>
        <button
          onClick={() => this.handleDecrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
