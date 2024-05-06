function temperature()
{
    //To convert celsius to farenheit
    //using the formula
    var c =document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("farenheit").value=f
}

function weight()
{
    var kg=document.getElementById("kilo").value;
    var p= kg * 2.205
    document.getElementById("pounds").value=p

}

function distance()
{
    var km=document.getElementById("km").value;
    var m=km * 0.62137
    document.getElementById("miles").value=m

}