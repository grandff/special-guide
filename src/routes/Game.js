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
        // igdb 노답이라 그냥 reddit 으로 변경함 ㅎ
        const test1 = await axios.get('https://www.reddit.com/.json?sort=new&limit=10');                       
        console.log("fucking usa :: ", test1);        
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