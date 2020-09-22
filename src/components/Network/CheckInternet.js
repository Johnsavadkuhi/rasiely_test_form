import React from 'react' ; 

function CheckInternet(props){

    return <>
    
    {navigator.onLine  ? <>{props.children} </>: <div>No Internet</div>}
    
    </>
}

export default CheckInternet ; 
