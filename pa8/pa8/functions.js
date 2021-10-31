function printMenu()
{
    var main, side1, side2;
    main = document.getElementById("main").value;
    side1 = document.getElementById("side1").value;
    side2 = document.getElementById("side2").value;
    document.getElementById("menu").innerHTML = "The menu for dinner tonight includes " + main + ", " + side1 + ", and " + side2 +".";
}

function computeAverage()
{
    var quiz1, quiz2, quiz3, quizAvg;
    quiz1 = document.getElementById("quiz1").value;
    quiz2 = document.getElementById("quiz2").value;
    quiz3 = document.getElementById("quiz3").value;
    quizAvg = (parseFloat(quiz1) + parseFloat(quiz2) + parseFloat(quiz3)) / 3;
    document.getElementById("average").innerHTML = "The average score is: " + quizAvg.toFixed(1);
}

function computeVolume()
{
    var radius, volume;
    radius = document.getElementById("radius").value;
    volume = (4/3) * (3.14159) * (radius * radius * radius);
    document.getElementById("volume").innerHTML = "The volume of a sphere with radius " + radius + " is " + volume.toFixed(2);
}