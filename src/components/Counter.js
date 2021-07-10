import React from "react";
import HighOrderComp from "./HighOrderComp";
class Counter extends React.Component {

  render() {
    return (
      <>
        <p>{this.props.count}</p>
        <button onClick={this.props.click}>click me</button>
      </>
    );
  }
}
const ConterComp = HighOrderComp(Counter);
export default ConterComp;
