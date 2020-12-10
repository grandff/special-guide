import React from "react";
import axios from "axios";
import 'url-search-params-polyfill';
import "./Game.css";

class Game extends React.Component{
    state = {
        isLoading : true,
        games : []
    };      

    callApi = () => {
        axios.get("http://localhost:8080/api").then((response) => {
            console.log(response);
        });
    }

    test = async() => {
        const result = await axios.post("http://apis.data.go.kr/B552555/lhLeaseNoticeInfo/lhLeaseNoticeInfo",
        {
            "serviceKey" : "yXugn7gIb5dEF5jMX1UjuV4qiy%2Bczf9hX3GZhu%2Fp3kxVI9JbMCvBGPHpKVp5QkAOllYDPlfSnSw0CDX7ZGGYsg%3D%3D",
            "PG_SZ" : "10",
            "PAGE" : "1"
        }, 
        {
            "Access-Control-Allow-Origin" : "*"
        });
        console.log(result);
    }

    componentDidMount() {        
        this.callApi();
        this.test();
    }

    render() {
        const { isLoading, games } = this.state;
        return(
            <section className="container">
                <div></div>
            </section>
        );
    }
}

export default Game;