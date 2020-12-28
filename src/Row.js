import './Row.css';
import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

function Row({ title1, title2, title3 }) {
    return (
        <div className="row">
            <div className="row__game">
                    <button className="row__game1">
                        <span>{ title1 }</span>
                        <span><PlayCircleOutlineIcon /></span>
                    </button>
                
                    <button className="row__game2">
                        <span>{ title2 }</span>
                        <span><PlayCircleOutlineIcon /></span>
                    </button>

                    <button className="row__game3">
                        <span>{ title3 }</span>
                        <span><PlayCircleOutlineIcon /></span>
                    </button>

            </div>
        </div>
    )
}

export default Row
