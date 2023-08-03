import ApplicantList from "./Components/ApplicantList/ApplicantList";
import Interview from "./Components/Interview/Interview";
import OfferSent from "./Components/OfferSent/OfferSent";
import OfferAccepted from "./Components/OfferAccepted/OfferAccepted";
import { useState } from 'react';

function App() {

//defining the state for the Applicant List component  
const [candidateName, setCandidateName] = useState('');

  return (
    <div>
      <h1>Recruitment Tracking System</h1>
{/* render the ApplicantList component with two props: candidateName and setCandidateName       */}
      <ApplicantList candidateName= {candidateName} setCandidateName= {setCandidateName}/>
      <Interview />
      <OfferSent />
      <OfferAccepted />
    </div>
  );
}

export default App;
