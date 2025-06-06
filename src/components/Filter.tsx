import { useState } from "react";
import "../css/Filter.css";

const startingContaminants = ["Arsenic, ", "Lead, ", "E.coli, ", "Radium, ", "Uranium, ", "Sediment, ", "Calcium, ", "Magnesium, ", "Sodium, "];
const additives = ["Chlorine, ", "Fluoride, "];

function Filter() {
  const [contaminants, setContaminants] = useState(startingContaminants);

  const disinfect = () => {
    setContaminants(
      startingContaminants
        .concat(additives)
        .filter(
          (contaminant) =>
            contaminant === "Calcium, " ||
            contaminant === "Magnesium, " ||
            contaminant === "Sodium, " ||
            contaminant === "Chlorine, " ||
            contaminant === "Fluoride, ",
        ),
    );
  };

  return (
    <>
      <div className="work-station">
        <p className="contaminant-list">{contaminants}</p>
        <div className="lights-container">
          <div className="red-light"> </div>
          <div className="yellow-light"> </div>
          <div className="green-light"> </div>
        </div>
        <div className="button-container">
          <button className="filter-button" onClick={disinfect}>
            Filter
          </button>
        </div>
      </div>
    </>
  );
}

export default Filter;
