class StarSystem {
    constructor(name, CoordinateX, CoordinateY, CoordinateZ) {
      this.name = name;
      this.X = CoordinateX;
      this.Y = CoordinateY;
      this.Z = CoordinateZ;
    }
}

//var UserInput 

//Temporary hardcoded systems
const HSystem01 = new StarSystem("Sol", 0, 0, 0);
const HSystem02 = new StarSystem("Alpha Centauri", 3.03125, -0.09375, 3.15625);
const HSystem03 = new StarSystem("Epsilon Indi", 3.125, -8.875, 7.125);
const HSystem04 = new StarSystem("Barnard's star", -3.03125, 1.375, 4.9375);
const HSystem05 = new StarSystem("Wolf 359", 3.875, 6.46875, -1.90625);
const HSystem06 = new StarSystem("Epsilon Eridani", 1.9375, -7.75, -6.84375);
const HSystem07 = new StarSystem("61 Cygni", -11.21875, -1.1875, 1.40625);
const HSystem08 = new StarSystem("Groombridge 34", -9.90625, -3.6875, -5.09375);
const HSystem09 = new StarSystem("Tau Ceti", -0.375, -11.40625, -3.5);
const HSystem10 = new StarSystem("Luyten's Star",  6.5625, 2.34375, -10.25);

//Function QueryDatabaseforData
    //Send UserInput to Database
    //Requesting coordinates
    //Place System Data into new const StarSystem

//Distance Calculation
function CalculateDistance(StarSystem01, StarSystem02) {
    var a = StarSystem02.X - StarSystem01.X;
    var b = StarSystem02.Y - StarSystem01.Y;
    var c = StarSystem02.Z - StarSystem01.Z;
    var result = Math.sqrt(a * a + b * b + c * c);
    return (result.toFixed(2));
}

//Function addStarSystemObjectToListVisibleToUser

//Function SetUserChosenSystemAsStartingPoint

//Function OptimizeRoute
    //
