const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 8080;

app.use(cors);

const callData = async() => {
    let response;
    try {
        response = await axios.get('http://apis.data.go.kr/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo?serviceKey=yXugn7gIb5dEF5jMX1UjuV4qiy%2Bczf9hX3GZhu%2Fp3kxVI9JbMCvBGPHpKVp5QkAOllYDPlfSnSw0CDX7ZGGYsg%3D%3D&PG_SZ=10&PAGE=1');
    } catch (e) {
        console.log("error :: ", e);
    }

    return response;
};


app.get("/api", (req, res) => {
   callData().then((response) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.json(response.data.response.body);
   });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});