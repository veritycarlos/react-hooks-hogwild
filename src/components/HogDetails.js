import React from 'react';

const HogDetails = ({ hog }) => {
    const {greased, weight, name } = hog;
    return (
        <div>
            <div className="description">
                <strong>{greased ? "greased" : "ungreased"}</strong>
                <p>{name}</p>
                <p>
                    Highest medal achieved: <strong>{hog["highest medal achieved"]}</strong>
                </p>
                <p>
                    Weight as a ratio of hog to LG -24.7 Cu. Ft. French Door Refrigerator
                    with Thru-the-Door Ice and Water: <strong>{weight}</strong>
                </p>
            </div>
        </div>
    )
}

export default HogDetails;