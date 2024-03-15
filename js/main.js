class Waypoint {
    constructor(name, CoordinateX, CoordinateY, CoordinateZ) {
      this.name = name;
      this.X = CoordinateX;
      this.Y = CoordinateY;
      this.Z = CoordinateZ;
    }
}

//Temporary hardcoded systems
const HWaypoint01 = new Waypoint("Sol", 0, 0, 0);
const HWaypoint02 = new Waypoint("Alpha Centauri", 3.03125, -0.09375, 3.15625);
const HWaypoint03 = new Waypoint("Epsilon Indi", 3.125, -8.875, 7.125);
const HWaypoint04 = new Waypoint("Barnard's star", -3.03125, 1.375, 4.9375);
const HWaypoint05 = new Waypoint("Wolf 359", 3.875, 6.46875, -1.90625);
const HWaypoint06 = new Waypoint("Epsilon Eridani", 1.9375, -7.75, -6.84375);
const HWaypoint07 = new Waypoint("61 Cygni", -11.21875, -1.1875, 1.40625);
const HWaypoint08 = new Waypoint("Groombridge 34", -9.90625, -3.6875, -5.09375);
const HWaypoint09 = new Waypoint("Tau Ceti", -0.375, -11.40625, -3.5);
const HWaypoint10 = new Waypoint("Luyten's Star",  6.5625, 2.34375, -10.25);
//Temporary hardcoded systems

//var UserInput = input

function QueryDatabaseForData(UserInput)
    //Send UserInput to Database via API
    //Request name and coordinates
    //Place System Data into new const Waypoint
    //GET https://www.edsm.net/api-v1/system
    //GET https://www.edsm.net/api-v1/system?systemName=Sol&showCoordinates=1
    //  systemName
    //  showCoordinates

function TableAddWaypoint(){

}

function TableRemoveWaypoint(){

}

function TableSetWaypointToStart(){

}

function CalculateDistance(Waypoint01, Waypoint02) {
    var a = Waypoint02.X - Waypoint01.X;
    var b = Waypoint02.Y - Waypoint01.Y;
    var c = Waypoint02.Z - Waypoint01.Z;
    var result = Math.sqrt(a * a + b * b + c * c);
    return (result.toFixed(2));
}

function OptimizeRoute(TableContent, TableStart){

}