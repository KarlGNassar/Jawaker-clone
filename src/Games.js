import './Games.css';
import React from 'react';
import Row from './Row';

function Games() {
    return (
        <div className="games">
            <div className="games__table">
                <h1>All Games</h1>
                <h4>Enjoy your favorite game on the world's biggest Arabic card games!</h4>
                <div className="games__row">
                    <Row title1="Tarneeb" title2="Trix Complex" title3="Hand"/>
                    <Row title1="Banakil" title2="Baloot" title3="Leekha"/>
                    <Row title1="Trix" title2="Estimation" title3="Basra"/>
                    <Row title1="Tarneeb" title2="400" title3="Trix Partner"/>
                    <Row title1="Concan" title2="Dominoes" title3="Ronda"/>
                    <Row title1="Jackaroo" title2="Dama" title3="Jawaker Deal"/>
                    <Row title1="Hareega" title2="Complex CC" title3="CC Partner"/>
                </div>
            </div>
        </div>
    )
}

export default Games
