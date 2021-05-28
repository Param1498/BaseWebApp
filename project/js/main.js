
$(document).ready(function(){
  getWeather();
});


function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}

function getWeather(srch)
{
  // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  var url  = "https://api.openweathermap.org/data/2.5/weather?q="+srch+"&units=imperia&APPID="+apiKey;
  $('.city').text("");
  $('.temp').text( "");
  $('.lat').text("");
  $('.lan').text("");
  
  $.ajax(url,{success:function(data){
    // console.log(data);
    $('.city').text('Weather of ' + data.name);
    $('.temp').text( 'Temperature '+ data.main.temp);
    $('.lat').text( 'Latitude '+ data.coord.lat);
    $('.lan').text( 'Longitude '+ data.coord.lon);
    
  },error:function(err){
    // $('.error').text('Data Not found! Please fill correct place name');
    console.log(err);
  }})
}

function SearchWeather(search)
{
  var searh = $('.srch').val();
  if(searh == "")
  {
    alert('pleae enter your place first');
    return false;
  }else{
    getWeather(searh);

  }

}

// 8b12af371aeead0060377a446013c29e
