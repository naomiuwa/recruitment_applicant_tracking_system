import NewCandidate from "./Components/NewCandidate/NewCandidate"
import Interview from "./Components/Interview/Interview";
import OfferSent from "./Components/OfferSent/OfferSent";
import OfferAccepted from "./Components/OfferAccepted/OfferAccepted";
import { useState } from 'react';

function App() {

//defining the state for the list of candidates in the NewCandidate component. 
const [candidateList, setCandidateList] = useState([]);

  return (
    <div>
      <h1>Recruitment Tracking System</h1>
      <NewCandidate candidateList={candidateList} setCandidateList={setCandidateList}/>
      <Interview />
      <OfferSent />
      <OfferAccepted />
    </div>
  );
}

export default App;
