import React from 'react'
import LocationInfo from "./LocationInfo";

export default function LocationContainer({dataLocation}) {
    return (
        <div>
            <LocationInfo dataLocation={dataLocation}/>
        </div>
    )
}
