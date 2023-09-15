
export default function Header({
    fullName,
    email,
    phoneNumber,
    location,
}){

    return(
        <div>
            <h1>{fullName}</h1>
            <h2>{phoneNumber} {email ? "|" : ""} {email} {location ? "|" : ""} {location}</h2>
        </div>
    );
}