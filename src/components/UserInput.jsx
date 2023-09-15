import '/src/css/UserInput.css';
import PersonalDetails from './PersonalInfo';

export default function UserInput({
    fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    location,
    setLocation,

}){

    return(
        <div className='left-panel'>
            <PersonalDetails
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                location={location}
                setLocation={setLocation}
            />
        </div>
    );
}