document.getElementById("convertButton").addEventListener("click", function () {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperatureInput - 32) * 5/9;
    } else {
        result = temperatureInput;
    }

    document.getElementById("resultText").textContent = `${temperatureInput} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
    document.getElementById("result").classList.remove("hidden");
});
