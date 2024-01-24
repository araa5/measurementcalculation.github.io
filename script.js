document.getElementById("conversionForm").addEventListener("submit", function (event) 
{
    event.preventDefault();
    convertMeasurement();
});
function convertMeasurement() 
{
    var inputValue = parseFloat(document.getElementById('valueForm').value);
    if (isNaN(inputValue)) 
	{
        alert("Please enter a valid numeric value.");
        return;
    }
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result = performConversion(inputValue, fromUnit, toUnit);
    document.getElementById("result").innerHTML = `${inputValue.toFixed(2)} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
}
function performConversion(value, fromUnit, toUnit) 
{
    switch (fromUnit) 
	{
        case "centimeter":
            return convertCentimeter(value, toUnit);
        case "milliliter":
            return convertMilliliter(value, toUnit);
        case "kilogram":
            return convertKilogram(value, toUnit);
        default:
            return "Invalid conversion";
    }
}
function convertCentimeter(value, toUnit) 
{
    switch (toUnit) 
	{
        case "meter":
            return value / 100; 
        case "liter":
            return value / 1000; 
        case "gram":
            return value; 
        default:
            return "Invalid conversion to " + toUnit;
    }
}
function convertKilogram(value, toUnit) 
{
    switch (toUnit) 
	{
        case 'meter':
            return value * 1000;
        case 'liter':
            return value / 1; 
        case "gram":
            return value * 1000;
        default:
            return 'Invalid conversion to ' + toUnit;
    }
}