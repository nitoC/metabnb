import React from 'react';
import Sponsors from '../../components/Sponsors';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import sectionimage1 from '../../assets/grouping1.png';
import frame from '../../assets/Frame.png';
import Card from '../../components/card';
import {homeImage} from '../../utils/homecard'
function Home({handleModal, handlepage}) {
    return ( 
        <div className="home">
            <Header handlepage={handlepage} handleModal={handleModal}/>
            <section className="first">
              <div className="first__txt-wrapper">
                 <div className="first__main-txt">
                    Rent a <span className='txt__outline'>Place</span> away from <span className='txt__outline'>Home</span> in the <span className='txt__outline'>Metaverse</span>
                 </div>
                 <div className="first__sub-txt">
                    We provide you with access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone.
                 </div>
                <div className="search">
                    <input type="text" className="search__input" placeholder="search for location" />
                    <button className="search__btn">Search</button> 
                 </div>
              </div>
              <div className="first__image">
              <img  src={sectionimage1} alt="body" />
              </div>
            </section>
            <Sponsors/>
            <section className="home__cards">
                <div className="home__heading">
                    Inspiration for your next adventure
                </div>
                <div className="home__cards-wrapper">
                    {
                        homeImage.map((a,b)=>{
                            return <Card key={b} image={a}/>
                        })
                    }
                </div>
            </section>
            <section className="last">
            <div className="last__txt-wrapper">
                 <div className="last__main-txt">
                    Metabnb NFTS
                 </div>
                 <div className="last__sub-txt">
                    Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTS. These NFTS gives our customer access to loads of our exclusive services.
                 </div>
                <div className="last__btn-wrapper">
                    <button className="last__btn">Learn more</button> 
                 </div>
              </div>
              <div className="last__image">
              <img  src={frame} alt="body image" />
              </div>
            </section>
            <Footer/>
        </div>
     );
}

export default Home;