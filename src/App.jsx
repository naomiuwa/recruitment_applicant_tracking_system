import ApplicantList from "./Components/ApplicantList/ApplicantList";
import Interview from "./Components/Interview/Interview";
import OfferSent from "./Components/OfferSent/OfferSent";
import OfferAccepted from "./Components/OfferAccepted/OfferAccepted";

function App() {
  return (
    <div>
      <h1>Recruitment Tracking System</h1>
      <ApplicantList />
      <Interview />
      <OfferSent />
      <OfferAccepted />
    </div>
  );
}

export default App;
