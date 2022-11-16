import React from 'react';
import logo from '../assets/logo.png'
function Header({handleModal, handlepage}) {
    return (  
        <>
         <div className='header'>
            <div className='logo'>
                <img src={logo} alt="metabnb logo" className='header__logo'/>
            </div>
            <nav className='topnav'>
              <p href="" className="nav__link" onClick={()=>handlepage('home')}>Home</p>
              <p href="" className="nav__link" onClick={()=>handlepage('places')}>Place to stay</p>
              <p href="" className="nav__link">NFTS</p>
              <p href="" className="nav__link">Community</p>
            </nav>
            <div onClick={handleModal} className="nav__btn">
                Connect Wallet
            </div>
        </div>
          <nav className='mobile-topnav'>
              <p href="" className="nav__link" onClick={()=>handlepage('home')}>Home</p>
              <p href="" className="nav__link" onClick={()=>handlepage('places')}>Place to stay</p>
              <p href="" className="nav__link">NFTS</p>
              <p href="" className="nav__link">Community</p>
            </nav>
        </>
       
    );
}

export default Header;