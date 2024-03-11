class StarSystem {
    constructor(name, CoordinateX, CoordinateY, CoordinateZ) {
      this.name = name;
      this.X = CoordinateX;
      this.Y = CoordinateY;
      this.Z = CoordinateZ;
    }
}

//Temp hardcoded systems
const HCSystem01 = new StarSystem("Sol", 0, 0, 0);
const HCSystem02 = new StarSystem("Alpha Centauri", 3.03125, -0.09375, 3.15625);
const HCSystem03 = new StarSystem("Epsilon Indi", 3.125, -8.875, 7.125);
const HCSystem04 = new StarSystem("Barnard's star", -3.03125, 1.375, 4.9375);
const HCSystem05 = new StarSystem("Wolf 359", 3.875, 6.46875, -1.90625);
const HCSystem06 = new StarSystem("Epsilon Eridani", 1.9375, -7.75, -6.84375);
const HCSystem07 = new StarSystem("61 Cygni", -11.21875, -1.1875, 1.40625);
const HCSystem08 = new StarSystem("Groombridge 34", -9.90625, -3.6875, -5.09375);
const HCSystem09 = new StarSystem("Tau Ceti", -0.375, -11.40625, -3.5);
const HCSystem10 = new StarSystem("Luyten's Star",  6.5625, 2.34375, -10.25);

//Distance Calculation
function CalculateDistance(StarSystem01, StarSystem02) {
    var a = StarSystem02.X - StarSystem01.X;
    var b = StarSystem02.Y - StarSystem01.Y;
    var c = StarSystem02.Z - StarSystem01.Z;
    var result = Math.sqrt(a * a + b * b + c * c);
    return (result.toFixed(2));
}

//var UserInput 

//Function QueryDatabaseforData
    //Send UserInput to Database
    //Requesting coordinates
    //Place System Data into new const StarSystem

//Function addStarSystemObjectToListVisibleToUser

//Function SetUserChosenSystemAsStartingPoint

//Function OptimizeRoute
    //
