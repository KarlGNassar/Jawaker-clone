import './Competitions.css';
import React from 'react';
import Row from './Row';

function Competitions() {
    return (
        <div className="competitions">
            <div className="competitions__table">
                <h1>All Competitions</h1>
                <h4>Shift from an amateur to an expert with Jawaker's Competitions</h4>
                <div className="competitions__row">
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

export default Competitions
