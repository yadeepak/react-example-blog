import React from "react";
const HighOrderComp = (OriginalComponent) => {
  return class updatedComponent extends React.Component {
    state = {
        count: 0,
      };
      updateCounter = () => {
        this.setState({ count: this.state.count + 1 });
      };
    render() {
      return (
        <>
          <OriginalComponent count = {this.state.count} click = {this.updateCounter}/>
        </>
      );
    }
  };
};
export default HighOrderComp;
