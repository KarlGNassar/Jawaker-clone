import React from 'react';
import './Body.css';
import Row from './Row';
import FacebookIcon from '@material-ui/icons/Facebook';

function Body() {
    return (
        <div className="body">
            <div className="body__ads">
                <div className="body__mobileApp">
                    <img src="https://www.jawaker.com/assets/home/mobile_app-d566d76227d060285a2c679bfd7dd8b9.png" alt="Jawaker Phone Ad"/>
                    <button className="body__GetItButton">Get It Now!</button>

                </div>

                <div className="body__facebook">
                    <div className="body__facebookInfo">
                        <h4><FacebookIcon/>Jawaker on Facebook</h4>
                        <h6>Like us on Facebook to hear about new games and other updates</h6>
                    </div>

                    <div className="body__facebookPage">
                        
                    </div>
                </div>
            </div>

            <div className="body__games">
                    <h1>Jawaker</h1>
                    <h4>Play the most popular Middle Eastern card games, connect with old friends, and make new ones!</h4>
                    <Row title1="Tarneeb" title2="Trix Complex" title3="Hand"/>
                    <Row title1="Banakil" title2="Baloot" title3="Leekha"/>
                    <Row title1="Trix" title2="Estimation" title3="Basra"/>
                    <Row title1="Tarneeb" title2="400" title3="Trix Partner"/>
                    <Row title1="Concan" title2="Dominoes" title3="Ronda"/>
                    <Row title1="Jackaroo" title2="Dama" title3="Jawaker Deal"/>
                    <Row title1="Hareega" title2="Complex CC" title3="CC Partner"/>
            </div>
        </div>
    )
}

export default Body
