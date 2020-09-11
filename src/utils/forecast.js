const request=require('request');

const forecast=(longitude,latitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=2fadc1ced45a3f8bb459026cf19bc26d&query="+latitude+","+longitude;
    request({url,json:true},(error,{body}={})=>{
        if(error){
            callback('Check your internet connection',undefined)
        }else if(body.error){
            callback('wrong coordinates. Please make sure you wrote correct data',undefined)
        }else {
            callback(undefined,"Temperature: "+body.current.weather_descriptions[0]+" but feels like "+body.current.feelslike+". There is "+body.current.precip*100+"% chance of rain");
            //simple text
        }
    })
}

module.exports=forecast
