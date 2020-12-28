import './Store.css';
import React from 'react';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Store() {
    return (
        <div className="store">
            <div className="store__info">
                <h1>Jawaker Store</h1>
                <span className="store__tokens">
                    <h3>4,225</h3><MonetizationOnIcon />
                </span>
            <button className="store__shoppingCart"><ShoppingCartIcon/></button>
            </div>

            <hr/>
            <div className="store__row">
                <div className="store__choice">
                    <h1>Chunk of tokens</h1>
                    <span className="store__value">
                        <h2>4000</h2><MonetizationOnIcon />
                    </span>
                    <img src="https://www.jawaker.com/assets/tokens_store/bundle01-658f43c2262adb38ca66887853c2d773.png" alt="coins"/>
                    <button>$1.0</button>
                </div>

                <div className="store__choice">
                    <h1>Pile of tokens</h1>
                    <span className="store__value">
                        <h2>30,000</h2><MonetizationOnIcon />
                    </span>
                    <img src="https://www.jawaker.com/assets/tokens_store/bundle02-30260035889a9ec8069dcc9358725f44.png" alt=""/>
                    <button>$5.0</button>
                </div>

                <div className="store__choice">
                    <h1>Bag of tokens</h1>
                    <span className="store__value">
                        <h2>65,000</h2><MonetizationOnIcon />
                    </span>
                    <img src="https://www.jawaker.com/assets/tokens_store/bundle03-a14667462fa921ec1d8cc191a413478e.png" alt="" />
                    <button>$10.0</button>

                </div>

            </div>

            <div className="store__row">
                <div className="store__choice">
                    <h1>Stack of tokens</h1>
                    <span className="store__value">
                        <h2>135,000</h2><MonetizationOnIcon />
                    </span>
                    <img src="https://www.jawaker.com/assets/tokens_store/bundle04-1f9a6a8fefc2651e4b3c4589baef7779.png" alt="" />
                    <button>$20.0</button>
                </div>

                <div className="store__choice">
                    <h1>Box of tokens</h1>
                    <span className="store__value">
                        <h2>350,000</h2><MonetizationOnIcon />
                    </span>
                    <img src="https://www.jawaker.com/assets/tokens_store/bundle05-ca700f02b68a9e92ad69de922713c70f.png" alt="" />
                    <button>$50.0</button>
                </div>

                <div className="store__choice">
                    <h1>Chest of tokens</h1>
                    <span className="store__value">
                        <h2>720,000</h2><MonetizationOnIcon />
                    </span>
                    <img src="https://www.jawaker.com/assets/tokens_store/bundle06-c4df378c079604887f7dc0b10d3a31ca.png" alt="" />
                    <button>$100.0</button>
                </div>
            </div>
        </div>
    )
}

export default Store
