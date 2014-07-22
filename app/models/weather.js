'use strict';

var request = require('request');

function Weather(){}

Weather.high = function(zip, cb){
  var url = 'http://api.wunderground.com/api/f62d84d2f24e71aa/forecast/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var high = body.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    var temp = high + 'F';
    cb(temp);
  });
};

Weather.low = function(zip, cb){
  var url = 'http://api.wunderground.com/api/f62d84d2f24e71aa/forecast/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var low = body.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    var temp = low + 'F';
    cb(temp);
  });
};

Weather.avgHigh = function(zip, cb){
  var url = 'http://api.wunderground.com/api/f62d84d2f24e71aa/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var sum = 0;//set sum to 0 to add days (forecastday[]).
    var days = body.forecast.simpleforecast.forecastday;

      for(var i = 0; i < days.length; i++){//loop through days (forecastday[]).
        sum += parseFloat(days[i].high.fahrenheit);
      }

    var avg = (sum / days.length); //calculate average 
    cb(avg);//return average in callBack function
  });
};

Weather.avgLow = function(zip, cb){
  var url = 'http://api.wunderground.com/api/f62d84d2f24e71aa/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var sum = 0;
    var days = body.forecast.simpleforecast.forecastday;//this is an alias that points to the forecast array

    for(var i = 0; i < days.length; i++){
      sum += parseInt(days[i].low.fahrenheit);
    }

    var avg = sum / days.length;
    cb(avg);
  });
};

Weather.highs = function(zip, cb){
  var url = 'http://api.wunderground.com/api/f62d84d2f24e71aa/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var days = body.forecast.simpleforecast.forecastday;//this is an alias that points to the forecast array
    var temps = [];

    for(var i = 0; i < days.length; i++){
      temps.push(parseInt(days[i].high.fahrenheit));
    }
    
    cb(temps);
  });
};


Weather.lows = function(zip, cb){
  var url = 'http://api.wunderground.com/api/f62d84d2f24e71aa/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var days = body.forecast.simpleforecast.forecastday;//this is an alias that points to the forecast array
    var temps = [];

    for(var i = 0; i < days.length; i++){
      temps.push(parseInt(days[i].low.fahrenheit));
    }
    
    cb(temps);
  });
};

Weather.deltas = function(zip, cb){
  var url = 'http://api.wunderground.com/api/f62d84d2f24e71aa/forecast10day/q/' + zip + '.json';
  request(url, function(error, response, body){
    body = JSON.parse(body);
    var days = body.forecast.simpleforecast.forecastday;//this is an alias that points to the forecast array
    var temps = [];

    for(var i = 0; i < days.length; i++){
      temps.push(parseInt(days[i].high.fahrenheit) - parseInt(days[i].low.fahrenheit));
    }
    
    cb(temps);
  });
};

module.exports = Weather;
