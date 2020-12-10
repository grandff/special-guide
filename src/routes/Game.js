import React from "react";
import axios from "axios";
import 'url-search-params-polyfill';
import "./Game.css";

class Game extends React.Component{
    state = {
        isLoading : true,
        games : []
    };      

    callGame = async() => {
        const result = await axios.get('http://localhost:8080/api');
        console.log("ang ", result);
    }

    componentDidMount() {        
        this.callGame();
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