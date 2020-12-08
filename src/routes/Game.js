import React from "react";
import axios from "axios";
import 'url-search-params-polyfill';
import "./Game.css";

let params = new URLSearchParams();
params.append('Client-ID', '859alws4abzc7sq461fd4yz8wpi49q');
params.append('Authorization', 'Bearer stc05j4qyhz5hnc4qhi6sjuxy6pmjm');

const headers = {
    'Content-Type' : 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin' : '*'
};

class Game extends React.Component{
    state = {
        isLoading : true,
        games : []
    };    

    getGames = async() => {        
        const test1 = await axios.post('https://api.igdb.com/v4/games', params, { headers, withCredentials : true });        
        console.log("fucking usa :: " + test1);        
    };

    componentDidMount() {
        this.getGames();      
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