
async function getWeatherData()
{
    
    document.getElementById("result").innerHTML = '<div class="loader"></div>'; 

    var city = document.getElementById("location").value;
    document.getElementById("map").className = "map " + city;
    console.log( city );
    const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=107db120aee720550008f5c1c8c15205") ;
    const weatherData = await response.json();
    var Days = weatherData.list;
    var result = "" ;

    for( var i = 0 ; i < 40 ; i+=8 )
    {
        var date = Days[i].dt_txt.split(" ")[0];
        var weather = Days[i].weather[0].main ;
        var Temp = Days[i].main.temp;
        console.log( date )
        console.log( Days[i].weather[0].main )
        result += '<div class="Data-Item '+ ( i===0 ? "First" : "" ) +'"><img src="https://openweathermap.org/img/wn/'+Days[i].weather[0].icon+'@2x.png">'+
        '<h5>Date</h5><div class="Data-Label">'+date+'</div>'+
        '<h5>Weather</h5><div class="Data-Label">'+weather+'</div>'+
        '<h5>Temperature</h5><div class="Data-Label">'+ (Number(Temp)/10).toFixed(2) +'°C</div>'+
        '</div>' ;
    }
    document.getElementById("result").innerHTML = result;   
}