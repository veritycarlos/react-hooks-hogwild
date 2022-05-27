import React, { useState} from 'react';
import HogDetails from "./HogDetails"

const HogCard =({ hog }) => {
    const {name, specialty, image} = hog;

    const [isHidden, setIsHidden] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    const handleDetails = () => {
        setShowDetails(showDetails => !showDetails)
    }

    const handleHidden = () => {
        setIsHidden(isHidden => !isHidden)
    }

    // hide the whole hog - Bonus Deliv
    if (isHidden) return null;

    return(
        <div className="ui card eight wide column pigTile">
            <div className="iamge">
                <img src={image} alt="pig pic" />
            </div>
            <div className="content">
                <h3 className="header">{name}</h3>
                <div className="description">My Specialty: {specialty}</div>
            </div>
            <div className="extra content">
                {showDetails ? <HogDetails hog={hog}/> : null}
                <button onClick={handleDetails}>More Info</button>
            </div>
            <div>
                console.log{handleHidden}
            </div>
        </div>
    )
}

export default HogCard;