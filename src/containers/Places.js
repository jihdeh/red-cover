import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Context from "../context";
import Checkbox from "../components/Checkbox";
import PlacesData from "../PlacesData";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Places = () => {
  const context = useContext(Context);
  const {
    updateState,
    state: { selectedPlaces }
  } = context;

  function handleChange({ target }) {
    const placeName = target.name;
    const isChecked = target.checked;

    if (selectedPlaces.has(placeName)) {
      selectedPlaces.delete(placeName);
      updateState("selectedPlaces", selectedPlaces);
    } else {
      updateState("selectedPlaces", selectedPlaces.set(placeName, isChecked));
    }
  }

  function renderPlaces(place) {
    const hasPlaceSelectedClass = selectedPlaces.has(place.imageName)
      ? "place--container-active"
      : "place--container";

    return (
      <div
        key={place.imageName}
        className=" col-xs-6 col-sm-4 col-md-5ths col-lg-5ths"
      >
        <div className={`d-flex flex-column ${hasPlaceSelectedClass}`}>
          <div className="place--action-detail">
            <div className="place--checkbox">
              <Checkbox
                name={place.imageName}
                checked={selectedPlaces.get(place.imageName)}
                onChange={handleChange}
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
              className="btn btn-lg position-absolute place--view__button place--action-detail"
            >
              View
            </button>
          </div>
          <img
            alt={place.imageName}
            className="img-fluid rounded w-100 place--img"
            src={place.thumbnail}
          />
          <div className="place--detail">
            <div className="p-0 col-xs col-sm col-md col-lg col-xl text-truncate">
              <b>{place.imageName}</b>
            </div>
            <p>in {place.datasetName} </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {PlacesData.map((place, key) => renderPlaces(place))}
      </div>
    </div>
  );
};

export default Places;
