import React, { Component } from "react";
import Context from "../context";
import Places from "./Places";
import SelectionAction from "../components/SelectionAction";

class Container extends Component {
  state = {
    selectedPlaces: new Map()
  };

  updateState = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  contextHelpers = () => ({
    state: this.state,
    updateState: this.updateState
  });

  render() {
    const { selectedPlaces } = this.state;
    const hasSelectedPlace = selectedPlaces.size;

    return (
      <Context.Provider value={this.contextHelpers()}>
        {hasSelectedPlace ? <SelectionAction /> : null}
        <Places />
      </Context.Provider>
    );
  }
}

export default Container;
