import "./ApplicantList.css";

//this component receives candidateName and setCandidateName as props using destructuring.
function ApplicantList({ candidateName, setCandidateName }) {
  return (
    <div>
      <input
        type="text"
        value={candidateName}
        onChange={(event) => setCandidateName(event.target.value)}
        placeholder="Enter candidate's name"
      />
    </div>
  );
}

export default ApplicantList;
