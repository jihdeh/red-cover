import React from "react";
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

function onTakeAction(context, action) {
  const { selectedPlaces } = context.state;
  const result = getAndParseSelected(selectedPlaces);
  console.log(`${result}: ${action}`);
}

function renderActionMenu(context) {
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
            onClick={() => onTakeAction(context, "move")}
            className="btn btn-lg mx-1"
          >
            Move
          </button>
          <button
            type="button"
            onClick={() => onTakeAction(context, "copy")}
            className="btn btn-lg mx-1"
          >
            Copy
          </button>
          &nbsp;
          <button
            type="button"
            onClick={() => onTakeAction(context, "share")}
            className="btn btn-sm mx-1"
          >
            <FontAwesomeIcon icon={faShareAlt} />
          </button>
          <button
            type="button"
            onClick={() => onTakeAction(context, "download")}
            className="btn btn-sm mx-1"
          >
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <button
            type="button"
            onClick={() => onTakeAction(context, "delete")}
            className="btn btn-sm mx-1"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </section>
  );
}

const SelectionAction = () => {
  return (
    <Context.Consumer>
      {context => {
        return renderActionMenu(context);
      }}
    </Context.Consumer>
  );
};

export default SelectionAction;
