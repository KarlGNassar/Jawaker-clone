import './Challenges.css';
import React from 'react';
import Row from './Row';

function Challenges() {
    return (
        <div className="challenges">
            <div className="challenges__table">

                <h1>All Challenges</h1>
                <h4>Got a minute? Prove your skills and expertise when challenging others in a quick and fun game!</h4>

                <div className="challenges__row">
                    <Row title1="Tarneeb" title2="Hand" title3="Hand Saudi"/>
                    <Row title1="Trix Complex" title2="Trix Complex Partner" title3="Leekha"/>
                </div>

            </div>
            <img className="challenges__ad" src="https://as2.ftcdn.net/jpg/01/79/17/41/500_F_179174111_NHEYojhDDULdOOmfr0o4uVcSf4FaKVlY.jpg" alt="Ad" />
        </div>
    )
}

export default Challenges
