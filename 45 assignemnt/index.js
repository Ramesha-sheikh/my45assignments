"use strict";
function storeCarInfo(manufacturer, modelName, options) {
    // Create a new object to store car information
    let carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Loop through the options object and store the additional information
    for (let key in options) {
        carInfo[key] = options[key];
    }
    return carInfo;
}
// Call the function with the required information and additional name-value pairs
let car = storeCarInfo("Toyota", "Camry", { color: "blue", features: ["navigation", "sunroof"] });
// Print the object returned by the function
console.log(car);
