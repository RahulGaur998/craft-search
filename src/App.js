import Navigation from './navigation.component';
import SearchBox from './searchbox.component';
import './App.css';
import { Fragment } from 'react';
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = 
"https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
  


function App() {
  return (
    <Fragment>
      <Navigation />
      <div className='nav'>
        <h1>
          Search Company
        </h1>
        <p>Search companies include Google, Booking Holdings, Trivago, Elastic, Compass and 445 other companies.</p>
        <p>Top 20 List of Addresses will be shown below :</p>
         <SearchBox />
      </div>
    </Fragment>
  );
}

export default App;
