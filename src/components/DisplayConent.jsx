import '/src/css/DisplayContent.css';
import '/src/css/Header.css'
import Header from './Header';
import CVBody from './CVBody';

export default function DisplayContent({
    fullName,
    email,
    phoneNumber,
    location,


}){

    return (
        <div className="right-panel"> 
            <div className='header'>
                <Header
                    fullName={fullName}
                    email={email}
                    phoneNumber={phoneNumber}
                    location={location}
                />
            </div>    
            <CVBody/>
        </div>
    );
}