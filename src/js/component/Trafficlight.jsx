import React,{useState} from 'react';
 const Trafficlight = () =>{

    const [clickedLight,setclickedLight]=useState('')


    return <div>
    <div id="trafficTop"></div>
        <div id="container">
            <div className={"red light " + (clickedLight==='red'?'selected':'')} onClick={() => setclickedLight('red')}> </div>
            <div className={"yellow light " + (clickedLight==='yellow'?'selected':'')} onClick={() => setclickedLight('yellow')}></div>
            <div className={"green light " + (clickedLight==='green'?'selected':'')} onClick={() => setclickedLight('green')}></div>
        </div>
</div>;

}
export default Trafficlight
