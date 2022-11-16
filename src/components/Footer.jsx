import React from 'react';
import footerlogo from '../assets/footerlogo.svg'
import facebook from '../assets/facebook2.svg'
import instagram from '../assets/instagram2.svg'
import twitter from '../assets/twitter2.svg'

function Footer() {
    return ( 
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__right">
                    <div className="footer__logo">
                        <img src={footerlogo} alt="" className="footer__logo-img" />
                    </div>
                   <div className="footer__socials">
                    <a href="" className="socials">
                        <img src={facebook} alt="" className="social__img" />
                    </a>
                    <a href="" className="socials">
                        <img src={instagram} alt="" className="social__img" />
                    </a>
                    <a href="" className="socials">
                        <img src={twitter} alt="" className="social__img" />
                    </a>
                   </div>
                </div>
                <div className="footer__left">
                    <div className="col1">
                        <div className="footer__heading">
                            Community
                        </div>
                        <a href="" className="footer__link">NFTS</a>
                        <a href="" className="footer__link">Tokens</a>
                        <a href="" className="footer__link">Landlords</a>
                        <a href="" className="footer__link">Discord</a>
                    </div>
                    <div className="col2">
                    <div className="footer__heading">
                            Places
                        </div>
                        <a href="" className="footer__link">Castle</a>
                        <a href="" className="footer__link">Farms</a>
                        <a href="" className="footer__link">Beach</a>
                        <a href="" className="footer__link">Learn more</a>
                    </div>
                    <div className="col3">
                    <div className="footer__heading">
                            About us
                        </div>
                        <a href="" className="footer__link">Road maps</a>
                        <a href="" className="footer__link">Creators</a>
                        <a href="" className="footer__link">Career</a>
                        <a href="" className="footer__link">Contact us</a>
                    </div>
                </div>
            </div>
            <div className="footer__copy">
                    &copy; 2022 Metabnb
                   </div>
        </div>
     );
}

export default Footer;