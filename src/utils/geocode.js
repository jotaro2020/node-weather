const request=require('request');

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicnRuMjAyMCIsImEiOiJja2V1eTVtMWkzMmMxMnNtcWw5aHJ0aDZiIn0.tdkPItK-CyPEiAVEgsfAEA'
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback('Check your internet connection',undefined)
        }else if(body.features.length===0){
            callback('Wrong url name address',undefined)
        }else {
            callback(undefined,{
                longitude:body.features[0].center[1],
                latitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })
}
module.exports=geocode