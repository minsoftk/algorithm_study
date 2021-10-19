/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
	// Create Origins and destinations array
	const origins = [];
	const destinations = [];
	let result = '';
	// Loop trough array of arrays
	for (let i = 0; i < paths.length; i++) {
		// push to origins and destinations
		origins.push(paths[i][0]);
		destinations.push(paths[i][1]);
	}
	// loop trough destinations
	for (let j = 0; j < destinations.length; j++) {
		// if no match return
		if (!origins.includes(destinations[j])) return destinations[j];
	}
};
