import React from "react";
import HighOrderComp from "./HighOrderComp";
class Counter2 extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.count}</p>
        <button onMouseOver={this.props.click}>click me</button>
      </>
    );
  }
}
export default HighOrderComp(Counter2);
