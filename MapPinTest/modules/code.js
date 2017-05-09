function mapBoundsChange(mapWidget, dict)
{
   alert("north east boundary lat "+ dict.northEast[0] + " lon "+ dict.northEast[1]);
   alert(" south west boundary lat "+ dict.southWest[0] + " lon "+ dict.southWest[1]);
}
	

function addPin(){
  var startPt = {
    id:"pin1",
    lat: "17.4947934",
    lon: "78.3996441",
    name: "KPHB 1",
    desc: "Kukatpally",
    showCallout : true,
    meta: {
            color: "green",
            label: "A"
    	}
	};

//navigateToLocation method call
  
  frmHome.mapHome.addPin(startPt);
  frmHome.mapHome.navigateToLocation(startPt,false,false);
  frmHome.lblAction.text="action:executed addPin method";
}

function removePin(){
  //alert("in removePin method");
  var startPt = {
    id:"pin1",
    lat: "17.4947934",
    lon: "78.3996441",
    name: "KPHB",
    desc: "Kukatpally",
    showCallout : true,
    meta: {
            color: "green",
            label: "A"
    	}
	};
  frmHome.mapHome.removePin(startPt);
  frmHome.lblAction.text="action:executed removePin method";
}


function addPins(){
  var startPt = [{
    id:"pin1",
    lat: "17.4947934",
    lon: "78.3996441",
    name: "KPHB 1",
    desc: "Kukatpally",
    showCallout : true,
    meta: {
            color: "green",
            label: "A"
    	}
	},
    {
    id:"pin2",
    lat: "20.4947934",
    lon: "80.3996441",
    name: "KPHB 2",
    desc: "Kukatpally",
    showCallout : true,
    meta: {
            color: "green",
            label: "A"
    	}
	}]             ;
  
  
  
  frmHome.mapHome.addPins(startPt);
  frmHome.mapHome.navigateToLocation(startPt[1],false,false);
  frmHome.lblAction.text="action:executed addPins method";
}

function removePins(){
  
  var startPt = [{
    id:"pin1",
    lat: "17.4947934",
    lon: "78.3996441",
    name: "KPHB 1",
    desc: "Kukatpally",
    showCallout : true,
    meta: {
            color: "green",
            label: "A"
    	}
	},
    {
    id:"pin2",
    lat: "20.4947934",
    lon: "80.3996441",
    name: "KPHB 2",
    desc: "Kukatpally",
    showCallout : true,
    meta: {
            color: "green",
            label: "A"
    	}
	}]             ;
  frmHome.mapHome.removePins(startPt);
  frmHome.lblAction.text="action:executed removePins method";
}
var gblOnBoundsChangedEventFiredCount=0;
function onBoundsChangedMethod(){
  frmHome.lblOnBoundsChanged.text="onBoundsChanged event fire execution count -"+(++gblOnBoundsChangedEventFiredCount);
}