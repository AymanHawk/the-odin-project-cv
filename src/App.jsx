import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import UserInput from './components/UserInput.jsx'
import DisplayContent from './components/DisplayConent.jsx'

function App(){

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');

  return(
    <div>
        <UserInput 
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          location={location}
          setLocation={setLocation}
        />
        <DisplayContent
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          location={location}
        />   
    </div>
  );
}

export default App;