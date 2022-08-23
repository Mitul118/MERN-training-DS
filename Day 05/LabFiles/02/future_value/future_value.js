var $ = function (id) {
    return document.getElementById(id);
}
var calculateClick = function () {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseInt($("years").value);
    if (investment <=0 || isNaN(investment)) {
        alert("Investment must be a valid number greater than zero");
    }
    else if(rate<=0||isNaN(rate))
    {
        alert("Rate must be a valid number greater than zero")
    }
    else if(years<=0||isNaN(years))
    {
        alert("Years must be a valid number greater than zero")
    }
    else {
        var futureValue=investment;
        for (i = 1; i <= years; i++) {
            futureValue += futureValue*rate/100;
        }
        $("future_value").value = futureValue.toFixed();
    }
}

window.onload = function()
{
    $("calculate").onclick=calculateClick;
}