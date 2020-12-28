import './Footer.css';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
            <footer className="footer">
                <div className="footer__info">
                    <h6>
                        App Store • Play Store • Blog • About • Privacy & Terms • Advertisement • Jobs • Support • <FacebookIcon />• <TwitterIcon /> • <InstagramIcon />
                    </h6>
                </div>
                <div className="footer__copyright">
                    <small>
                        &#169; 2020 Jawaker. All Rights Reserved.
                    </small>
                </div>
            </footer>
    )
}

export default Footer
