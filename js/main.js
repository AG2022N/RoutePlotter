class Waypoint {
    constructor(name, x, y, z) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

// replace with get request
const waypoints = [
    new Waypoint("Sol", 0, 0, 0),
    new Waypoint("Alpha Centauri", 3.03125, -0.09375, 3.15625),
    new Waypoint("Epsilon Indi", 3.125, -8.875, 7.125),
    new Waypoint("Barnard's star", -3.03125, 1.375, 4.9375),
    new Waypoint("Wolf 359", 3.875, 6.46875, -1.90625),
    new Waypoint("Epsilon Eridani", 1.9375, -7.75, -6.84375),
    new Waypoint("61 Cygni", -11.21875, -1.1875, 1.40625),
    new Waypoint("Groombridge 34", -9.90625, -3.6875, -5.09375),
    new Waypoint("Tau Ceti", -0.375, -11.40625, -3.5),
    new Waypoint("Luyten's Star",  6.5625, 2.34375, -10.25),
];

function addWaypoint(name, x, y, z) {
    const newWaypoint = new Waypoint(name, x, y, z);
    waypoints.push(newWaypoint);
}

function removeWaypointByName(name) {
    const index = waypoints.findIndex(waypoint => waypoint.name === name);
    if (index !== -1) {
        waypoints.splice(index, 1);
    }
}

function distance(waypoint1, waypoint2) {
    return Math.sqrt(Math.pow(waypoint2.x - waypoint1.x, 2) + 
                     Math.pow(waypoint2.y - waypoint1.y, 2) +
                     Math.pow(waypoint2.z - waypoint1.z, 2));
}

function calculatePathDistance(path) {
    let totalDistance = 0;
    for (let i = 0; i < path.length - 1; i++) {
        totalDistance += distance(path[i], path[i + 1]);
    }
    return totalDistance;
}

function permuteWaypoints(waypoints) {
    const permutations = [];

    function permute(arr, m = []) {
        if (arr.length === 0) {
            permutations.push(m);
        } else {
            for (let i = 0; i < arr.length; i++) {
                const curr = arr.slice();
                const next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next));
            }
        }
    }

    permute(waypoints);
    return permutations;
}

function findShortestPath(waypoints) {
    const allPermutations = permuteWaypoints(waypoints);
    let shortestPath = null;
    let shortestDistance = Infinity;

    allPermutations.forEach(permutation => {
        const pathDistance = calculatePathDistance(permutation);
        if (pathDistance < shortestDistance) {
            shortestDistance = pathDistance;
            shortestPath = permutation;
        }
    });

    return shortestPath;
}

function populateTable(waypoints) {
    const tableBody = document.querySelector('.waypoints tbody');
    tableBody.innerHTML = '';

    waypoints.forEach(waypoint => {
        const row = tableBody.insertRow();
        Object.values(waypoint).forEach(val => {
            const cell = row.insertCell();
            cell.textContent = val;
        });
    });
}

populateTable(waypoints);