import React from 'react' ; 

function CheckInternet(props){

    return <>
    
    {navigator.onLine  ? <>{props.children} </>: <div>No Internet <br/> please connect to internet to see form  </div>}
    
    </>
}

export default CheckInternet ; 
