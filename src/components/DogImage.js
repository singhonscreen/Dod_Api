import React from 'react'

const DogImage = ({imageSrc}) => {
    return (
        <>
            <div className="main_container">
            <div className="imgcontainer">
            <img src={imageSrc} alt="not found"  />
            </div>
            </div>
        </>
    )
}

export default DogImage
