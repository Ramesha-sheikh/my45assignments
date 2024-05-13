function storeCarInfo(manufacturer: string, modelName: string, options: Record<string, any>): Record<string, any> {
    // Create a new object to store car information
    let carInfo: Record<string, any> = {
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
