var userName;    
// userName = prompt("Enter Your Name: ");
// //alert("Hello There! " + userName);

// document.getElementById("hello").innerHTML = "Hello There! " + userName;

function printPetMessage()
{
    var petName;
    petName = document.getElementById("petInput").value;
    console.log(petName);
    if(!petName)
    {
        return;
    }
    else
    {
    document.getElementById("petMessage").innerHTML = petName + ' is an awesome pet!';
    }
}

function computeArea()
{
    var height, width, area;
    height = document.getElementById("height").value;
    width = document.getElementById("width").value;
    if(!height || !width)
    {
        return;
    }
    else
    {
    area = width * height;
    document.getElementById("Area").innerHTML = "Area is: " + area;
    }
}

function computeSum()
{
    var first, second, sum;
    first = document.getElementById("first").value;
    second = document.getElementById("second").value;
    if(!first || !second)
    {
        return;
    }
    else
    {
    sum = parseFloat(first) + parseFloat(second);
    document.getElementById("sum").innerHTML = "Sum of " + first + " and " + second + " is: " + sum;
    }
}

function convertTemp()
{
    var fahr, cels;
    fahr = document.getElementById("fahr").value;
    cels = document.getElementById("cels").value;
    if(!cels && !fahr)
    {
        return;
    }
    else if(!cels)
    {
        cels = (parseFloat(fahr) - 32) / 1.8;
        document.getElementById("convert").innerHTML = fahr + "&#8451; Fahrenheit in Celsius is: " + cels.toFixed(2) + "&#8451;";
    }
    else if(!fahr)
    {
        fahr = (parseFloat(cels) * 1.8) + 32;
        document.getElementById("convert").innerHTML = cels + "&#8451; Celsius in Fahrenheit is: " + fahr.toFixed(2) + "&#8451;";
    }
}