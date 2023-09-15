import '/src/css/PersonalInfo.css';
import { useState } from 'react';

export default function PersonalDetails({
    fullName,
    setFullName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    location,
    setLocation,
}){

    function handleFullNameChange(e){
        setFullName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handleNumberChange(e){
        setPhoneNumber(e.target.value);
    }

    function handleLocationChange(e){
        setLocation(e.target.value)
    }

    return(
        <div className="container">
            <h2>Personal Information</h2>
            
            <h3 className='pi-headers'>Full Name</h3>
            <input 
                placeholder='John Smith'
                value={fullName}
                onChange={handleFullNameChange} 
            />
            <h3 className='pi-headers'>Email</h3>
            <input
                placeholder='xyz@gmail.com'
                value={email}
                onChange={handleEmailChange}
            />
            <h3 className='pi-headers'>Phone Number</h3>
            <input
                placeholder='(777) 777-7777'
                value={phoneNumber}
                onChange={handleNumberChange}
            />
            <h3 className='pi-headers'>Location</h3>
            <input 
                placeholder='Tokyo, Japan'
                value={location}
                onChange={handleLocationChange}
            />
        </div>
    );
}

