const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express()
const port = 8080;
let result;

app.use(cors);


/*
    ServiceKey : yXugn7gIb5dEF5jMX1UjuV4qiy%2Bczf9hX3GZhu%2Fp3kxVI9JbMCvBGPHpKVp5QkAOllYDPlfSnSw0CDX7ZGGYsg%3D%3D
    http://apis.data.go.kr/B552555/lhLeaseNoticeInfo


    result = await axios.post('https://api.igdb.com/v4/games/', {
        params : {
            'Client-ID' : '859alws4abzc7sq461fd4yz8wpi49q',
            'Authorization' : 'Bearer stc05j4qyhz5hnc4qhi6sjuxy6pmjm'
        }
    });  

*/

const getGames = async() => {                           
    result = await axios.post('http://apis.data.go.kr/B552555/lhLeaseNoticeInfo', {
        params : {
            'ServiceKey' : 'yXugn7gIb5dEF5jMX1UjuV4qiy%2Bczf9hX3GZhu%2Fp3kxVI9JbMCvBGPHpKVp5QkAOllYDPlfSnSw0CDX7ZGGYsg%3D%3D'            
        }
    });           

    console.log("a ha??", result);
    app.listen(result, () => console.log(`fucking result ${result}`));
};

app.get("/api", (req, res) => {
   getGames();
   res.send(result);
});

app.listen(port, () => console.log(`Listening on port ${port}`));