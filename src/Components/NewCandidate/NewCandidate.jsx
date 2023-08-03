/* eslint-disable react/prop-types */
import { useState } from "react";

//this component receives candidateName and setCandidateName as props using destructuring.
function NewCandidate({ candidateList, setCandidateList }) {
  //here I have set a state to store the individual name typed
  const [candidateName, setCandidateName] = useState("");

  return (
    <div>
      {/* onChange detects the name being typed, once an event happen it calls the function */}
      <input
        onChange={function (event) {
          setCandidateName(event.target.value);
        }}
      />
      <button>Add</button>

      <h3> New Candidate List </h3>

      {/* mapping because I am rendering a list of names */}
      {candidateList.map((candidate, index) => {
        {
          /* the key is a reference to something unique, for react to know what to render when things change  */
        }
        return <p key={index}>{candidate}</p>;
      })}
    </div>
  );
}

export default NewCandidate;
