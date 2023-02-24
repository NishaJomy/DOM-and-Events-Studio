// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load',function(){

let takeoffButton=this.document.getElementById("takeoff");
takeoffButton.addEventListener("click",function(){

let isConfirm=window.confirm("Confirm that the shuttle is ready for takeoff.");
if(isConfirm){

let flightstatus=document.getElementById("flightStatus");
flightstatus.innerText="Shuttle in flight.";

let flightscreen=document.getElementById("shuttleBackground");
flightscreen.style.backgroundColor="blue";

let shuttleheight=document.getElementById("spaceShuttleHeight")
shuttleheight.innerHTML="10,000 ";
}

})

let landButton=this.document.getElementById("landing");
landButton.addEventListener("click",function(){
alert("The shuttle is landing. Landing gear engaged.");

if(alert){
    let flightstatus=document.getElementById("flightStatus");
    flightstatus.innerText="The shuttle has landed.";

    let flightscreen=document.getElementById("shuttleBackground");
    flightscreen.style.backgroundColor="green";
    

    let shuttleheight=document.getElementById("spaceShuttleHeight")
    shuttleheight.innerHTML="0 ";
}

})

let abortButton=this.document.getElementById("missionAbort");
abortButton.addEventListener("click",function(){

    let isAbort=window.confirm("Confirm that you want to abort the mission.");
    if(isAbort){

        let flightstatus=document.getElementById("flightStatus");
        flightstatus.innerText="Mission aborted";
    
        let flightscreen=document.getElementById("shuttleBackground");
        flightscreen.style.backgroundColor="green";

        let shuttleheight=document.getElementById("spaceShuttleHeight")
        shuttleheight.innerHTML="0";

    }

})

let downButton=this.document.getElementById("down");
downButton.addEventListener("click",function(){

})
})