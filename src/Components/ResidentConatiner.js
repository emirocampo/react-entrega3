import { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";

export default function ResidentConatiner({dataResident}) {
const [dataResidentInfo, setdataResidentInfo] = useState(null);

useEffect(() => {
    if(dataResident){
        fetch(dataResident)
            .then(response => response.json())
            .then( data => {
                console.log(data);
                setdataResidentInfo(data);})
    }
    
}, [dataResident])
    
return(
    <div>
        {dataResidentInfo && <ResidentInfo dataResident={dataResidentInfo}/>}
    </div>
)     
    
    
}
