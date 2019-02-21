import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faShareAlt,
  faDownload,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import Context from "../context";

function getAndParseSelected(selectedPlaces) {
  let files = [];
  for (let [key] of selectedPlaces) {
    files.push(key);
  }
  const contructResponse = files.map(file => file).join(", ");
  return contructResponse;
}

const SelectionAction = () => {
  const context = useContext(Context);

  function onTakeAction(action) {
    const { selectedPlaces } = context.state;
    const result = getAndParseSelected(selectedPlaces);
    console.log(`${result}: ${action}`);
  }

  function renderActionMenu() {
    const { selectedPlaces } = context.state;
    return (
      <section className="container-fluid selection--action--container pb-3">
        <div className="pt-2 d-flex">
          <div className="mr-auto">
            <FontAwesomeIcon icon={faTimes} className="mr-2 align-middle" />
            <b className="align-middle">{selectedPlaces.size} selected</b>
            <span className="align-middle"> | Select All </span>
          </div>
          <div>
            <button
              type="button"
              onClick={() => onTakeAction("move")}
              className="btn btn-lg mx-1"
            >
              Move
            </button>
            <button
              type="button"
              onClick={() => onTakeAction("copy")}
              className="btn btn-lg mx-1"
            >
              Copy
            </button>
            &nbsp;
            <button
              type="button"
              onClick={() => onTakeAction("share")}
              className="btn btn-sm mx-1"
            >
              <FontAwesomeIcon icon={faShareAlt} />
            </button>
            <button
              type="button"
              onClick={() => onTakeAction("download")}
              className="btn btn-sm mx-1"
            >
              <FontAwesomeIcon icon={faDownload} />
            </button>
            <button
              type="button"
              onClick={() => onTakeAction("delete")}
              className="btn btn-sm mx-1"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
    {renderActionMenu()}
    </>
  );
};

export default SelectionAction;
