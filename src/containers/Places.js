import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from "../context";
import Checkbox from "../components/Checkbox";
import PlacesData from "../PlacesData";
import {
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";

function handleChange({ target }, { updateState, state: contextState }) {
  const placeName = target.name;
  const isChecked = target.checked;

  if (contextState.selectedPlaces.has(placeName)) {
    contextState.selectedPlaces.delete(placeName);
    updateState("selectedPlaces", contextState.selectedPlaces);
  } else {
    updateState(
      "selectedPlaces",
      contextState.selectedPlaces.set(placeName, isChecked)
    );
  }
};

function renderPlaces(place) {
  return (
    <div
      key={place.imageName}
      className=" col-xs-6 col-sm-4 col-md-5ths col-lg-5ths"
    >
      <Context.Consumer>
        {context => (
          <div className="d-flex flex-column place--container">
          <div>
            <div className="place--checkbox">
              <Checkbox
                name={place.imageName}
                checked={context.state.selectedPlaces.get(place.imageName)}
                onChange={e => handleChange(e, context)}
              />
              <label htmlFor={place.imageName} />
            </div>
              <div className="position-absolute place--ellipsis">
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-lg position-absolute place--view__button"
              >
              View
              </button>
            </div>
            <img
              alt={place.imageName}
              className="img-fluid rounded place--img w-100"
              src={place.thumbnail}
            />
            <div className="place--detail">
              <div className="p-0 col-xs col-sm col-md col-lg col-xl text-truncate">
                <b>{place.imageName}</b>
              </div>
              <p>in {place.datasetName} </p>
            </div>
          </div>
        )}
      </Context.Consumer>
    </div>
  );
};

const Places = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {PlacesData.map((place, key) => renderPlaces(place))}
      </div>
    </div>
  );
};

export default Places;
