import React from 'react';

const PersonCard = props => {
    return(
        <>            
            <div className="card my-5">
                <div className="card-header bg-dark text-light">Person 1</div>
                    <div className="card-body">
                        <h1>{ props.lastName }, { props.firstName }</h1>
                        <p>Age: { props.age }</p>
                        <p>Hair Color: { props.hairColor }</p>
                    </div>
            </div>
        </>
    );
}

export default PersonCard;